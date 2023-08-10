using Microsoft.EntityFrameworkCore;
using webapi.Database.Entities;

namespace webapi.Database.Repository
{
    public class ReservationRepository : IReservationRepository
    {
        private readonly CinemaDbContext _context;

        public ReservationRepository(CinemaDbContext context)
        {
            _context = context;
        }

        public void AddReservation(Reservations reservation)
        {
            _context.Reservations.Add(reservation);
            _context.Users.Update(reservation.User);
            _context.SaveChanges();
        }

        public void CancelReservation(Reservations reservations)
        {
            foreach (var place in reservations.Seats)
            {
                _context.Seats.Update(place);
            }
            _context.Reservations.Remove(reservations);
            _context.SaveChanges();
        }

        public Reservations GetReservationById(int id)
        {
            var data = _context.Reservations.Include(s => s.BookedSeance).Include(p => p.Seats).Include(u => u.User).FirstOrDefault(o => o.Id == id);
            return data;
        }
    }
}
