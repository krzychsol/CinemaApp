using Microsoft.AspNetCore.Mvc;
using webapi.Database.Entities;
using webapi.Database.Repository;

namespace webapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MoviesController : ControllerBase
    {
        private readonly CinemaDbContext _context;
        private readonly IMovieRepository _repository;
        public MoviesController(CinemaDbContext context, IMovieRepository repository)
        {
            _context = context;
            _repository = repository;
        }

        [HttpGet]
        [Route("Movies")]
        public ActionResult<IEnumerable<Movie>> GetAllMovies()
        {
            var movieItems = _repository.GetAllMovies();
            return Ok(movieItems);
        }

        [Route("Movies/{id}")]
        [HttpGet]
        public ActionResult<Movie> GetMovieById(int id)
        {
            var movieItem = _repository.GetMovieById(id);
            return Ok(movieItem);
        }

        [Route("Movies/Add")]
        [HttpPost]
        public void AddMovie(Movie movie)
        {
            _repository.AddMovie(movie);
        }

        [Route("Movies/Edit")]
        [HttpPut]
        public void EditMovie(Movie movie)
        {
            _repository.EditMovie(movie);
        }

        [Route("Movies/Delete/{id}")]
        [HttpDelete]
        public void DeleteMovie(int id)
        {
            _repository.DeleteMovie(id);
        }
    }
}
