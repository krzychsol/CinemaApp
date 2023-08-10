using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace webapi.Database.Entities
{
    public class User
    {
        [Key]
        public int Id { get; set; }
        public string Username { get; set; }

        public string Password { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public bool IsAdmin { get; set; }
        public List<Reservations> Reservations { get; set; }
    }
}
