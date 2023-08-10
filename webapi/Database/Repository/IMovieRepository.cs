using webapi.Database.Entities;

namespace webapi.Database.Repository
{
    public interface IMovieRepository
    {
        IEnumerable<Movie> GetAllMovies();
        Movie GetMovieById(int id);
        Movie GetUserByTitle(string title);
        void AddMovie(Movie movie);
        void EditMovie(Movie movieEdit);
        void DeleteMovie(int id);
    }
}
