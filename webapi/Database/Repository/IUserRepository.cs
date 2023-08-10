using webapi.Database.Entities;

namespace webapi.Database.Repository
{
    public interface IUserRepository
    {
        IEnumerable<User> GetAllUsers();
        User GetUserById(int id);
        User GetUserByName(string name);
        User GetUserByEmail(string email);
        User CheckPassword(string name, string password);
        IEnumerable<User> GetAdmins();
        User CreateUser(User user);
        void EditUser(User user);
        void DeleteUser(int id);
    }
}
