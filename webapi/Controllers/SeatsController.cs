using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using webapi.Database.Entities;
using webapi.Database.Repository;

namespace webapi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SeatsController : Controller
    {
        private readonly CinemaDbContext _context;

        public SeatsController(CinemaDbContext context)
        {
            _context = context;
        }

        // GET: Seats
        [HttpGet]
        public IEnumerable<Seat> Get()
        {
            return _context.Seats;
        }

        // GET: Seats/Details/5
        [HttpGet("{id}")]
        public Seat Get(int id)
        {
            return _context.Seats.SingleOrDefault(u => u.Id == id);
        }

        [HttpPost]
        public void Post([FromBody] Seat seat)
        {
            _context.Seats.Add(seat);
            _context.SaveChanges();
        }

        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Seat seat)
        {
            _context.Seats.Update(seat);
            _context.SaveChanges();
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var item = _context.Seats.FirstOrDefault(u => u.Id == id);
            if (item != null)
            {
                _context.Seats.Remove(item);
                _context.SaveChanges();
            }
        }
    }
}
