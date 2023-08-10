using System.ComponentModel.DataAnnotations;

namespace webapi.Database.Entities
{
    public class CinemaHall
    {
        [Key]
        public int Id { get; set; }
        public DateTime OpenDate { get; set; }
        public DateTime CloseDate { get; set; }
        public List<Seance> Seances { get; set; }
    }
}
