﻿using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace PublicApi.Database
{
    public partial class TreeRecognitionDbContext : DbContext
    {
        public TreeRecognitionDbContext()
        {
        }

        public TreeRecognitionDbContext(DbContextOptions<TreeRecognitionDbContext> options)
            : base(options)
        {
        }

        public virtual DbSet<ImageDefinition> ImageDefinition { get; set; }
        public virtual DbSet<Metric> Metric { get; set; }
        public virtual DbSet<MetricType> MetricType { get; set; }
        public virtual DbSet<PredictionRequest> PredictionRequest { get; set; }
        public virtual DbSet<PredictionResult> PredictionResult { get; set; }
        public virtual DbSet<WebRequest> WebRequest { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ImageDefinition>(entity =>
            {
                entity.Property(e => e.CameraModel).HasMaxLength(30);

                entity.Property(e => e.CameraVendor).HasMaxLength(30);

                entity.Property(e => e.ComponentConfiguration).HasMaxLength(500);

                entity.Property(e => e.Compression).HasMaxLength(30);

                entity.Property(e => e.ExifVersion).HasMaxLength(500);

                entity.Property(e => e.FileName)
                    .IsRequired()
                    .HasMaxLength(200);

                entity.Property(e => e.Orientation).HasMaxLength(30);

                entity.Property(e => e.OriginalFileName)
                    .IsRequired()
                    .HasMaxLength(500);

                entity.Property(e => e.Taken).HasColumnType("date");

                entity.Property(e => e.Xresolution).HasColumnName("XResolution");

                entity.Property(e => e.Yresolution).HasColumnName("YResolution");

                entity.HasOne(d => d.WebRequest)
                    .WithMany(p => p.ImageDefinition)
                    .HasForeignKey(d => d.WebRequestId)
                    .HasConstraintName("FK__ImageDefi__WebRe__40F9A68C");
            });

            modelBuilder.Entity<Metric>(entity =>
            {
                entity.Property(e => e.Ended).HasColumnType("date");

                entity.Property(e => e.MetricCode)
                    .IsRequired()
                    .HasMaxLength(10);

                entity.Property(e => e.Started).HasColumnType("date");

                entity.HasOne(d => d.MetricCodeNavigation)
                    .WithMany(p => p.Metric)
                    .HasForeignKey(d => d.MetricCode)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Metric__MetricCo__4C6B5938");

                entity.HasOne(d => d.WebRequest)
                    .WithMany(p => p.Metric)
                    .HasForeignKey(d => d.WebRequestId)
                    .HasConstraintName("FK__Metric__WebReque__4B7734FF");
            });

            modelBuilder.Entity<MetricType>(entity =>
            {
                entity.HasKey(e => e.Code);

                entity.Property(e => e.Code)
                    .HasMaxLength(10)
                    .ValueGeneratedNever();

                entity.Property(e => e.Value)
                    .IsRequired()
                    .HasMaxLength(30);
            });

            modelBuilder.Entity<PredictionRequest>(entity =>
            {
                entity.HasOne(d => d.ImageDefinition)
                    .WithMany(p => p.PredictionRequest)
                    .HasForeignKey(d => d.ImageDefinitionId)
                    .HasConstraintName("FK__Predictio__Image__43D61337");

                entity.HasOne(d => d.WebRequest)
                    .WithMany(p => p.PredictionRequest)
                    .HasForeignKey(d => d.WebRequestId)
                    .HasConstraintName("FK__Predictio__WebRe__44CA3770");
            });

            modelBuilder.Entity<PredictionResult>(entity =>
            {
                entity.Property(e => e.Label)
                    .IsRequired()
                    .HasMaxLength(30);

                entity.HasOne(d => d.ImageDefinition)
                    .WithMany(p => p.PredictionResult)
                    .HasForeignKey(d => d.ImageDefinitionId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Predictio__Image__489AC854");

                entity.HasOne(d => d.PredictionRequest)
                    .WithMany(p => p.PredictionResult)
                    .HasForeignKey(d => d.PredictionRequestId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Predictio__Predi__47A6A41B");
            });

            modelBuilder.Entity<WebRequest>(entity =>
            {
                entity.Property(e => e.Requested)
                    .HasColumnType("date")
                    .HasDefaultValueSql("(getdate())");
            });
        }
    }
}
