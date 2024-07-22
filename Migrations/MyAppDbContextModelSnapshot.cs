﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using india.DATA;

#nullable disable

namespace india.Migrations
{
    [DbContext(typeof(MyAppDbContext))]
    partial class MyAppDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.9")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("india.Models.DBEntities.Urun", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("UrunAdi")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("UrunFiyat")
                        .HasColumnType("int");

                    b.Property<int>("UrunStok")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.ToTable("Uruns");
                });
#pragma warning restore 612, 618
        }
    }
}
