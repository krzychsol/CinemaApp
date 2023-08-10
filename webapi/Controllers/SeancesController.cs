using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NuGet.Protocol.Core.Types;
using webapi.Database.Entities;
using webapi.Database.Repository;
using webapi.Models;

namespace webapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SeancesController : ControllerBase
    {
        private readonly CinemaDbContext _context;
        private readonly IToken _token;
        private readonly ISeanceRepository _repository;

        public SeancesController(CinemaDbContext context, ISeanceRepository repository, IToken token)
        {
            _context = context;
            _repository = repository;
            _token = token;
        }

        [Route("Seances/Add")]
        [HttpPost]
        public ActionResult<ApiResponse<Seance>> AddSeance(Seance seance)
        {
            string returnError = null;
            var validations = new List<string>();
            var seanceDuration = (seance.EndDate.Ticks - seance.StartDate.Ticks) / 600000000;
            if (seanceDuration > Convert.ToInt32(seance.Movie.DurationTime))
            {
                seance.SeatList = new List<Seat>(150);
                for (int i = 0; i < 150; i++)
                {
                    seance.SeatList.Add(new Seat { IsFree = true, IsChoosed = false, Number = i + 1 } as Seat);
                }
                returnError = (_repository.AddSeance(seance));
                if (returnError != null)
                    validations.Add(returnError);
            }
            else
                validations.Add("To short seance.");

            ApiResponse<Seance> response = new ApiResponse<Seance>
            {
                Data = seance,
                Token = _token.Generate(),
                validationMessages = validations
            };
            return Ok(response);
        }

        [Route("Seances/{id}")]
        [HttpGet]
        public ActionResult<Movie> GetSeanceById(int id)
        {
            var seanceItem = _repository.GetSeanceById(id);
            return Ok(seanceItem);
        }

        [Route("Seances/Delete/{id}")]
        [HttpDelete]
        public void DeleteSeance(int id)
        {
            _repository.DeleteSeance(id);
        }
    }
}
