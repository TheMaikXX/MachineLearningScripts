from os.path import expanduser

import torchvision.transforms as transforms

modelTrainParamsPath = expanduser('~/workbench/temp/pytorch_home/__custom_weights/train_params.pt')
modelDeployParamsPath = expanduser('~/workbench/temp/pytorch_home/__custom_weights/deploy_params.pt')

datasetLabelsPath = expanduser('~/workbench/tree-images/data/labels_autogenerated.json')

dataDir = expanduser('~/workbench/tree-images/data/images')
batchSize = 32
learningRate = 1e-6
epochs = 1

trainTransformationFlow = transforms.Compose([
	transforms.RandomResizedCrop(224),
	transforms.RandomHorizontalFlip(),
	transforms.RandomVerticalFlip(),
	transforms.ToTensor(),
	transforms.Normalize([0.485, 0.456, 0.406], [0.229, 0.224, 0.225])
])

productionTransformationFlow = transforms.Compose([
	transforms.Resize(224),
	transforms.CenterCrop(224),
	transforms.ToTensor(),
	transforms.Normalize([0.485, 0.456, 0.406], [0.229, 0.224, 0.225])
])
