using Microsoft.AspNetCore.Mvc;
using webapi.Database.Entities;
using webapi.Database.Repository;
using webapi.Models;
using webapi.EmailHandler;

namespace webapi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ReservationsController : Controller
    {
        private readonly CinemaDbContext _context;
        private readonly IUserRepository _userRepository;
        private readonly ISeanceRepository _seanceRepository;
        private readonly IReservationRepository _repository;

        public ReservationsController(CinemaDbContext context, IUserRepository userRepository, ISeanceRepository seanceRepository, IReservationRepository repository)
        {
            _context = context;
            _userRepository = userRepository;
            _seanceRepository = seanceRepository;
            _repository = repository;
        }

        [HttpPost]
        [Route("Reservations/Add")]
        public void AddOrder(CreateReservationDto createOrderDTO)
        {
            var reservation = new Reservations();

            if ((createOrderDTO.StartDate - DateTime.Now).TotalMinutes < 30)
                reservation.IsReturnable = false;
            else
                reservation.IsReturnable = true;

            reservation.BookedSeance = _seanceRepository.GetSeanceById(createOrderDTO.SeanceId);
            reservation.User = _userRepository.GetUserById(createOrderDTO.UserId);

            var placesToModify = reservation.BookedSeance.SeatList.Where(p => createOrderDTO.SeatsId.Any(o => o == p.Id));
            foreach (var place in placesToModify)
            {
                place.Reservations = reservation;
                place.IsFree = false;
                place.IsChoosed = false;
            }

            _repository.AddReservation(reservation);
            EmailHandler.EmailHandler.Send(reservation, true);
        }

        [Route("Reservations/Delete/{id}")]
        [HttpDelete]
        public ActionResult<ErrorResponse> DeleteOrder(int id)
        {
            var validations = new List<string>();

            Reservations reservation = _repository.GetReservationById(id);
            if (reservation.IsReturnable == true)
            {
                var placesToModify = reservation.BookedSeance.SeatList;
                if (placesToModify != null)
                {
                    foreach (var place in placesToModify)
                    {
                        place.Reservations = null;
                        place.IsFree = true;
                        place.IsChoosed = false;
                    }
                }
                _repository.CancelReservation(reservation);
                EmailHandler.EmailHandler.Send(reservation, false);
                return null;
            }
            else
            {
                validations.Add("This order canot be refunded. \nIt's refund time out.");
            }

            ErrorResponse response = new ErrorResponse
            {
                validationMessages = validations
            };
            return Ok(response);
        }


    }
}
