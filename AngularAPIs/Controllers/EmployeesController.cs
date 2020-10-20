using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AngularAPIs.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AngularAPIs.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeesController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<Employee> Get()
        {
            return Employee.Emps;
        }

        [HttpGet("{id}")]
        public Employee Get(long id)
        {
            return Employee.findById(id);
        }

        [HttpPost("create")]
        public Employee Create(Employee emp)
        {
            emp.id = null;
            return Employee.Update(emp);
        }

        [HttpPost("update")]
        public Employee Update(Employee emp)
        {
            return Employee.Update(emp);
        }
    }
}
