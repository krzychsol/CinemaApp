using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.CodeAnalysis.Scripting;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using NuGet.Protocol.Core.Types;
using webapi.Database.Entities;
using webapi.Database.Repository;
using webapi.Models;
using AuthorizeAttribute = webapi.Helpers.AuthorizeAttribute;

namespace webapi.Controllers
{
   
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly CinemaDbContext _context;
        private readonly IUserRepository _userRepository;
        private readonly IToken _token;
       

        public UsersController(CinemaDbContext context, IUserRepository userRepository, IToken token)
        {
            _context = context;
            _userRepository = userRepository;
            _token = token;
        }

        [HttpGet]
        [Route("Users")]
        public ActionResult<IEnumerable<User>> GetAllUsers()
        {
            var userItems = _userRepository.GetAllUsers();
            return Ok(userItems);
        }

        [HttpGet]
        [Route("Users/{id}")]
        public ActionResult<User> GetUserById(int id)
        {
            var userItem = _userRepository.GetUserById(id);
            return Ok(userItem);
        }


        [Route("Users/Byusername")]
        [HttpGet]
        public ActionResult<User> GetUserByEmail(string email)
        {
            var userItem = _userRepository.GetUserByEmail(email);
            return Ok(userItem);
        }

        [HttpGet]
        [Route("Users/Admins")]
        public ActionResult<IEnumerable<User>> GetAdmins()
        {
            var adminItems = _userRepository.GetAdmins();
            return Ok(adminItems);
        }

        [Route("register")]
        [HttpPost]
        public ActionResult<ApiResponse<User>> Register([FromBody] User user)
        {
            var validations = new List<string>();
            if (_userRepository.GetUserByName(user.Firstname) != null)
            {
                validations.Add("A user with this name already exist.");
            }
            if (_userRepository.GetUserByEmail(user.Username) != null)
            {
                validations.Add("This email adress provided is already assigned to any user");
            }

            if (!validations.Any())
            {
                _userRepository.CreateUser(user);
            }

            ApiResponse<User> response = new ApiResponse<User>
            {
                Data = user,
                Token = _token.Generate(),
                validationMessages = validations
            };

            return Ok(response);
        }

        [Route("Users/Edit")]
        [HttpPut]
        public void EditUser(User user)
        {
            _userRepository.EditUser(user);
        }

        [Route("login")]
        [HttpPost]
        public ActionResult<ApiResponse<User>> Login(User user)
        {
            var validations = new List<string>();
            if (_userRepository.GetUserByEmail(user.Username) == null)
            {
                validations.Add("Wrong email.");
            }
            if (_userRepository.CheckPassword(user.Username, user.Password) == null)
            {
                validations.Add("Wrong password.");
            }
            if (!validations.Any())
            {
                user = _userRepository.GetUserByEmail(user.Username);
            }

            ApiResponse<User> response = new ApiResponse<User>
            {
                Data = user,
                Token = _token.Generate(),
                validationMessages = validations
            };

            return Ok(response);
        }
    }
}
