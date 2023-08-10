using System.ComponentModel.DataAnnotations;

namespace webapi.Database.Entities
{
    public class Seat
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public int Number { get; set; }
        [Required]
        public bool IsFree { get; set; }
        public bool IsChoosed { get; set; }
        public Seance Seance { get; set; }
        public Reservations Reservations { get; set; }


    }
}
