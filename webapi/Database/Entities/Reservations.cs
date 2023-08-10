using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace webapi.Database.Entities
{
    public class Reservations
    {
        [Key]
        public int Id { get; set; }
        public Seance BookedSeance { get; set; }
        public List<Seat> Seats { get; set; }
        public bool IsReturnable { get; set; }
        public User User { get; set; }

    }
}
