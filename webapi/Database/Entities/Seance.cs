using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace webapi.Database.Entities
{
    public class Seance
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public DateTime StartDate { get; set; }
        [Required]
        public DateTime EndDate { get; set; }

        public Movie Movie { get; set; }
        public List<Seat> SeatList { get; set; } = new List<Seat>();

    }
}
