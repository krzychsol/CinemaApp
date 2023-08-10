using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using webapi.Database.Entities;

namespace webapi.Database.Repository
{
    public class CinemaDbContext : DbContext
    {
        protected readonly IConfiguration Configuration;

        public CinemaDbContext(IConfiguration _configuration)
        {
            Configuration = _configuration;
        }


        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            //base.OnConfiguring(options);
            options.UseNpgsql(Configuration.GetConnectionString("CinemaConnectionString"));
        }

        public DbSet<Movie> Movies { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Seat> Seats { get; set; }
        public DbSet<Seance> Seances { get; set; }
        public DbSet<Reservations> Reservations { get; set; }
        public DbSet<CinemaHall> CinemaHalls { get; set; }
    }
}
