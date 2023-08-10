﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using webapi.Database.Repository;

#nullable disable

namespace webapi.Migrations
{
    [DbContext(typeof(CinemaDbContext))]
    partial class CinemaDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.9")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("webapi.Database.Entities.CinemaHall", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<DateTime>("CloseDate")
                        .HasColumnType("timestamp with time zone");

                    b.Property<DateTime>("OpenDate")
                        .HasColumnType("timestamp with time zone");

                    b.HasKey("Id");

                    b.ToTable("CinemaHalls");
                });

            modelBuilder.Entity("webapi.Database.Entities.Movie", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("Description")
                        .HasColumnType("text");

                    b.Property<int>("DurationTime")
                        .HasColumnType("integer");

                    b.Property<string>("PosterImg")
                        .HasColumnType("text");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Movies");
                });

            modelBuilder.Entity("webapi.Database.Entities.Reservations", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<int?>("BookedSeanceId")
                        .HasColumnType("integer");

                    b.Property<bool>("IsReturnable")
                        .HasColumnType("boolean");

                    b.Property<int?>("UserId")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.HasIndex("BookedSeanceId");

                    b.HasIndex("UserId");

                    b.ToTable("Reservations");
                });

            modelBuilder.Entity("webapi.Database.Entities.Seance", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<int?>("CinemaHallId")
                        .HasColumnType("integer");

                    b.Property<DateTime>("EndDate")
                        .HasColumnType("timestamp with time zone");

                    b.Property<int?>("MovieId")
                        .HasColumnType("integer");

                    b.Property<DateTime>("StartDate")
                        .HasColumnType("timestamp with time zone");

                    b.HasKey("Id");

                    b.HasIndex("CinemaHallId");

                    b.HasIndex("MovieId");

                    b.ToTable("Seances");
                });

            modelBuilder.Entity("webapi.Database.Entities.Seat", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<bool>("IsChoosed")
                        .HasColumnType("boolean");

                    b.Property<bool>("IsFree")
                        .HasColumnType("boolean");

                    b.Property<int>("Number")
                        .HasColumnType("integer");

                    b.Property<int?>("ReservationsId")
                        .HasColumnType("integer");

                    b.Property<int?>("SeanceId")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.HasIndex("ReservationsId");

                    b.HasIndex("SeanceId");

                    b.ToTable("Seats");
                });

            modelBuilder.Entity("webapi.Database.Entities.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("Firstname")
                        .HasColumnType("text");

                    b.Property<bool>("IsAdmin")
                        .HasColumnType("boolean");

                    b.Property<string>("Lastname")
                        .HasColumnType("text");

                    b.Property<string>("Password")
                        .HasColumnType("text");

                    b.Property<string>("Username")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("webapi.Database.Entities.Reservations", b =>
                {
                    b.HasOne("webapi.Database.Entities.Seance", "BookedSeance")
                        .WithMany()
                        .HasForeignKey("BookedSeanceId");

                    b.HasOne("webapi.Database.Entities.User", "User")
                        .WithMany("Reservations")
                        .HasForeignKey("UserId");

                    b.Navigation("BookedSeance");

                    b.Navigation("User");
                });

            modelBuilder.Entity("webapi.Database.Entities.Seance", b =>
                {
                    b.HasOne("webapi.Database.Entities.CinemaHall", null)
                        .WithMany("Seances")
                        .HasForeignKey("CinemaHallId");

                    b.HasOne("webapi.Database.Entities.Movie", "Movie")
                        .WithMany("Seances")
                        .HasForeignKey("MovieId");

                    b.Navigation("Movie");
                });

            modelBuilder.Entity("webapi.Database.Entities.Seat", b =>
                {
                    b.HasOne("webapi.Database.Entities.Reservations", "Reservations")
                        .WithMany("Seats")
                        .HasForeignKey("ReservationsId");

                    b.HasOne("webapi.Database.Entities.Seance", "Seance")
                        .WithMany("SeatList")
                        .HasForeignKey("SeanceId");

                    b.Navigation("Reservations");

                    b.Navigation("Seance");
                });

            modelBuilder.Entity("webapi.Database.Entities.CinemaHall", b =>
                {
                    b.Navigation("Seances");
                });

            modelBuilder.Entity("webapi.Database.Entities.Movie", b =>
                {
                    b.Navigation("Seances");
                });

            modelBuilder.Entity("webapi.Database.Entities.Reservations", b =>
                {
                    b.Navigation("Seats");
                });

            modelBuilder.Entity("webapi.Database.Entities.Seance", b =>
                {
                    b.Navigation("SeatList");
                });

            modelBuilder.Entity("webapi.Database.Entities.User", b =>
                {
                    b.Navigation("Reservations");
                });
#pragma warning restore 612, 618
        }
    }
}