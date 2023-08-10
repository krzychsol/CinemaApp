using webapi.Database.Entities;

namespace webapi.Database.Repository
{
    public interface ISeanceRepository
    {
        Seance GetSeanceById(int id);
        string AddSeance(Seance seance);
        void EditSeance(int id, Seance seanceEdit);
        void DeleteSeance(int id);
        void UpdateSeance(Seance seance);
    }
}
