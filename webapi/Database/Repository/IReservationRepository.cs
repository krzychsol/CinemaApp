using webapi.Database.Entities;

namespace webapi.Database.Repository
{
    public interface IReservationRepository
    {
        void AddReservation(Reservations reservation);
        void CancelReservation(Reservations reservations);
        Reservations GetReservationById(int id);
    }
}
