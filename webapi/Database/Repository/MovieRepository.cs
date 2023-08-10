using Microsoft.EntityFrameworkCore;
using webapi.Database.Entities;

namespace webapi.Database.Repository
{
    public class MovieRepository : IMovieRepository
    {
        private readonly CinemaDbContext _context;

        public MovieRepository(CinemaDbContext context)
        {
            _context = context;
        }
        public void AddMovie(Movie movie)
        {
            _context.Movies.Add(movie);
            _context.SaveChanges();
            _context.Movies.Update(movie);
        }

        public void DeleteMovie(int id)
        {
            Movie movieDelete = _context.Movies.FirstOrDefault(m => m.Id == id);
            _context.Movies.Remove(movieDelete);
            _context.SaveChanges();
        }

        public void EditMovie(Movie movieEdit)
        {
            _context.Movies.Update(movieEdit);
            _context.SaveChanges();
        }

        public IEnumerable<Movie> GetAllMovies()
        {
            var data = _context.Movies;
            return data;
        }

        public Movie GetMovieById(int id)
        {
            var data = _context.Movies.Include(s => s.Seances).FirstOrDefault(m => m.Id == id);
            return data;
        }

        public Movie GetUserByTitle(string title)
        {
            return _context.Movies.FirstOrDefault(m => m.Title == title);
        }
    }
}
