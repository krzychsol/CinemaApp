using System.ComponentModel.DataAnnotations;

namespace webapi.Database.Entities
{
    public class Movie
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Title { get; set; }
        public string Description { get; set; }
        public string PosterImg { get; set; }
        [Required]
        public int DurationTime { get; set; }
        public List<Seance> Seances { get; set; } = new List<Seance>();
    }
}
