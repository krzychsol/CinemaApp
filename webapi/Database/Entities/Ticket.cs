using System.ComponentModel.DataAnnotations;

namespace webapi.Database.Entities
{
    public class Ticket
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public decimal Price { get; set; }
        [Required]
        public Seance Seance { get; set; }
    }
}
