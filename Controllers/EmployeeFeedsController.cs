using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using GreatProject.Model;
using GreatProject.DbContext;

namespace GreatProject.Controllers
{
    [ApiController]
   // [Route("controller")]
    public class EmployeeFeedsController : ControllerBase
    {
        private readonly IEmployeeFeedsContext _employeeFeedsContext;

        public EmployeeFeedsController(IEmployeeFeedsContext employeeFeedsContext)
        {
            _employeeFeedsContext = employeeFeedsContext;
        }

        //EmployeeFeedsContext _employeeFeedsContext = new EmployeeFeedsContext();

        [Route("getemployeefeeds")]
        public IEnumerable<PersonModel> Index()
        {
            var data = _employeeFeedsContext.FetchData();
            return data;
        }

     
    }
}
