using Microsoft.EntityFrameworkCore;
using webapi.Database.Entities;

namespace webapi.Database.Repository
{
    public class UserRepository : IUserRepository
    {
        private readonly CinemaDbContext _context;

        public UserRepository(CinemaDbContext context)
        {
            _context = context;
        }

        public User CheckPassword(string username, string password)
        {
            return _context.Users.FirstOrDefault(u => (u.Username == username && u.Password == password));
        }

        public User CreateUser(User user)
        {
            _context.Users.Add(user);
            _context.SaveChanges();

            return user;
        }

        public void DeleteUser(int id)
        {
            User userDelete = _context.Users.FirstOrDefault(u => u.Id == id);
            _context.Users.Remove(userDelete);
            _context.SaveChanges();
        }

        public void EditUser(User user)
        {
            _context.Users.Update(user);
            _context.SaveChanges();
        }

        public IEnumerable<User> GetAdmins()
        {
            return _context.Users.Where(u => u.IsAdmin == true).ToList();
        }

        public IEnumerable<User> GetAllUsers()
        {
            return _context.Users.Include(o => o.Reservations).ThenInclude(s => s.BookedSeance).ThenInclude(m => m.Movie).ToList();
        }

        public User GetUserByEmail(string username)
        {
            return _context.Users.FirstOrDefault(u => u.Username == username);
        }

        public User GetUserById(int id)
        {
            return _context.Users.Include(o => o.Reservations).ThenInclude(s => s.BookedSeance).ThenInclude(m => m.Movie).FirstOrDefault(u => u.Id == id);
        }

        public User GetUserByName(string firstname)
        {
            return _context.Users.FirstOrDefault(u => u.Firstname == firstname);
        }
    }
}
