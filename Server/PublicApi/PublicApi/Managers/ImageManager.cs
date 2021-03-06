using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using ExifLib;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using PublicApi.Database;
using PublicApi.Helpers;
using PublicApi.Data;
using PublicApi.Data.Interfaces;
using PublicApi.Services;

namespace PublicApi.Managers
{
	public class ImageManager : IImageManager
	{
		private readonly ILogger<ImageManager> logger;
		private readonly ITreeRecognitionDbProvider dbProvider;
		private readonly IHttpProvider httpProvider;
		private readonly Guid correlationId;

		public ImageManager(
			ITreeRecognitionDbProvider dbProvider,
			IHttpProvider httpProvider,
			ILogger<ImageManager> logger,
			CorrelationService correlationService)
		{
			this.logger = logger;
			this.dbProvider = dbProvider;
			this.httpProvider = httpProvider;

			correlationId = correlationService.CorrelationId;
		}

		/// <summary>
		/// Handles one round of Handling images (i.e. image saving, registering in Database, getting results for each image
		/// </summary>
		/// <param name="tempFolderPath">Path where to store file</param>
		/// <param name="url">Url at which DeepLearningAPI is server</param>
		/// <param name="files">Files (images) to be processed</param>
		/// <returns></returns>
		public async Task<ResponseModel> ProcessImagesAsync(
			string tempFolderPath,
			string url,
			List<IFormFile> files)
		{
			logger.LogDebug($"{correlationId} - Getting predictions for {files.Count} images");

			// orig. file names
			List<string> images = new List<string>(files.Count);
			List<PredictionRequest> predictionRequests = new List<PredictionRequest>(files.Count);
			List<ImageDefinition> imageDefinitions = new List<ImageDefinition>(files.Count);

			DateTime started = DateTime.Now;
			WebRequest webRequest = dbProvider.RegisterRequest(correlationId);
			// Save files and extract their EXIF data
			List<string> newFileNames = RegisterImages(
				webRequest,
				files,
				images,
				predictionRequests,
				tempFolderPath,
				imageDefinitions
			);

			// Send actual request
			logger.LogDebug($"{correlationId} - Sending request for predictions to \"{url}\"");
			PredictionResponseModel predictionResponse = await httpProvider
				.PostAsync<PredictionResponseModel>(url, new PredictionRequestModel(newFileNames));

			if (predictionResponse.Data == null)
			{
				logger.LogError($"{correlationId} - Predictions from DeepLearning API was not returned.");

				// TODO: Register metrics
				throw new HttpRequestException($"Response from {url} does not contain any data");
			}
			
			// TODO: Save results to DB..
			// predictionResponse.Data.ForEach();
			
			// collect all results (amount: images x labels)
			List<PredictionResult> allPredictionResults = predictionResponse.Data
				.Select((imagePredictions, i) =>
					imagePredictions.Select(prediction => new PredictionResult
					{
						Label = prediction.Key,
						Score = prediction.Value,
						ImageDefinition = imageDefinitions[i],
						PredictionRequest = predictionRequests[i]
					}).ToList())
				.Aggregate((predictions1, predictions2) =>
				{
					predictions1.AddRange(predictions2);
					return predictions1;
				});

			// save results to db
			dbProvider.RegisterPredictionResults(allPredictionResults);
			dbProvider.RegisterMetrics(new Metric
			{
				WebRequestId = webRequest.WebRequestId,
				MetricCode = "OVERALL",
				Started = started,
				Ended = DateTime.Now
			});

			// map image orig. names to prediction response
			return new ResponseModel(predictionResponse.Data.ToDictionary(predictions => images[predictionResponse.Data.IndexOf(predictions)]));
		}

		/// <summary>
		/// Saves file,
		/// Registers ImageDefinition to DB for every image			returns those definitions via param
		/// Registers PredictionRequest to DB for every image		returns those p. requests via param
		/// </summary>
		/// <param name="webRequest"></param>
		/// <param name="files"></param>
		/// <param name="images"></param>
		/// <param name="predictionRequests"></param>
		/// <param name="tempFolderPath"></param>
		/// <param name="imageDefinitions"></param>
		/// <returns>
		///	List of newly generated filenames
		/// </returns>
		private List<string> RegisterImages(WebRequest webRequest,
			List<IFormFile> files,
			List<string> images,
			List<PredictionRequest> predictionRequests,
			string tempFolderPath, List<ImageDefinition> imageDefinitions)
		{
			return files.Select(file =>
			{
				string generatedFileName;
				using (Stream fileStream = file.OpenReadStream())
				{
					generatedFileName = SaveFile(tempFolderPath, fileStream, file.FileName);

					ImageDefinition imageDefinition = new ImageDefinition();
					imageDefinitions.Add(imageDefinition);

					logger.LogDebug($"{correlationId} - Extracting EXIF data from {file.FileName}");
					ExtractExifData(imageDefinition, fileStream);

					imageDefinition.OriginalFileName = file.FileName;
					imageDefinition.FileName = generatedFileName;
					imageDefinition.Size = file.Length;
					imageDefinition.WebRequest = webRequest;
					logger.LogDebug($"{correlationId} - Registering ImageDefinition of {file.FileName} file to Database");
					dbProvider.RegisterImageDefinition(imageDefinition);
					predictionRequests.Add(
						dbProvider.RegisterPredictionRequest(webRequest, imageDefinition)
					);
				}
				
				images.Add(file.FileName);
				return generatedFileName;
			}).ToList();
		}

		/// <summary>
		/// Gets Exif data from <see cref="ExifReader"/> and fill those data into <see cref="ImageDefinition"/>
		/// </summary>
		/// <param name="imageDefinition"></param>
		/// <param name="fileStream"></param>
		private void ExtractExifData(ImageDefinition imageDefinition, Stream fileStream)
		{
			fileStream.Seek(0, SeekOrigin.Begin);
			try
			{
				using (ExifReader exifReader = new ExifReader(fileStream))
				{
					if (exifReader.GetTagValue(ExifTags.Make, out string vendor))
						imageDefinition.CameraVendor = vendor;
					if (exifReader.GetTagValue(ExifTags.Model, out string model))
						imageDefinition.CameraModel = model;
					if (exifReader.GetTagValue(ExifTags.DateTimeOriginal, out DateTime date))
						imageDefinition.Taken = date;
					if (exifReader.GetTagValue(ExifTags.Compression, out string compression))
						imageDefinition.Compression = compression;
					if (exifReader.GetTagValue(ExifTags.XResolution, out double xResolution)) // double
						imageDefinition.Xresolution = xResolution;
					if (exifReader.GetTagValue(ExifTags.YResolution, out double yResolution))
						imageDefinition.Yresolution = yResolution;
					if (exifReader.GetTagValue(ExifTags.ResolutionUnit, out ushort resolutionUnit)) // uint16
						imageDefinition.ResolutionUnit = (short) resolutionUnit;
					if (exifReader.GetTagValue(ExifTags.ExposureTime, out double exposureTime)) // double
						imageDefinition.ExposureTime = exposureTime;
					if (exifReader.GetTagValue(ExifTags.ExposureProgram, out ushort exposureProgram)) // uint16
						imageDefinition.ExposureProgram = (short) exposureProgram;
					if (exifReader.GetTagValue(ExifTags.ExifVersion, out byte[] exifVersion)) // byte[]
						imageDefinition.ExifVersion = exifVersion;
					if (exifReader.GetTagValue(ExifTags.ComponentsConfiguration, out byte[] componentsConfiguration)) // byte[]
						imageDefinition.ComponentConfiguration = componentsConfiguration;
					if (exifReader.GetTagValue(ExifTags.ExposureBiasValue, out double exposureBias))
						imageDefinition.ExposureBias = exposureBias;
					if (exifReader.GetTagValue(ExifTags.MaxApertureValue, out double maxAperture))
						imageDefinition.MaxApertureValue = maxAperture;
					if (exifReader.GetTagValue(ExifTags.ApertureValue, out double aperture))
						imageDefinition.ApertureValue = aperture;
					if (exifReader.GetTagValue(ExifTags.Flash, out ushort flash)) // uint16
						imageDefinition.Flash = (short) flash;
					if (exifReader.GetTagValue(ExifTags.ColorSpace, out ushort colorSpace)) // uint16
						imageDefinition.ColorSpace = (short) colorSpace;
					if (exifReader.GetTagValue(ExifTags.ImageWidth, out int width))
						imageDefinition.Width = width;
					if (exifReader.GetTagValue(ExifTags.ImageWidth, out int height))
						imageDefinition.Width = height;
					if (exifReader.GetTagValue(ExifTags.Orientation, out string orientation))
						imageDefinition.Orientation = orientation;
				}
			}
			catch (Exception ex)
			{
				logger.LogError(ex, $"{correlationId} - Error occured during getting EXIF data from file..");
			}
		}

		/// <summary>
		/// Saves file on disk asynchronously and returns file's filename
		/// </summary>
		/// <param name="tempFolderPath"></param>
		/// <param name="file"></param>
		/// <param name="fileName"></param>
		/// <returns></returns>
		private string SaveFile(string tempFolderPath, Stream file, string fileName)
		{
			string newFilename = FileHelper
				.GetNewFileName(tempFolderPath, Path.GetExtension(fileName));
			FileInfo newFile = new FileInfo(newFilename);
			
			logger.LogDebug($"{correlationId} - file \"{fileName}\" is being saved to \"{tempFolderPath}\" under \"{newFilename}\" file name");

			using (Stream target = newFile.Create())
				file.CopyTo(target);
			return newFilename;
		}
	}
}
