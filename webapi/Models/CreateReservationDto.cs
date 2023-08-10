namespace webapi.Models
{
    public class CreateReservationDto
    {
        public int SeanceId { get; set; }
        public int UserId { get; set; }
        public int[] SeatsId { get; set; }
        public DateTime StartDate { get; set; }
    }
}
