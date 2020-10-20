using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularAPIs.Models
{
    public class Employee
    {
        public static List<Employee> Emps = new List<Employee>
        {
            new Employee { id = 0, firstName = "Fred", lastName = "Johnson", department = "Accounting", salary = 80000 },
            new Employee { id = 1, firstName = "Julie", lastName = "Smith", department = "ID", salary = 90000 },
            new Employee { id = 2, firstName = "George", lastName = "Washington", department = "Management", salary = 100000},
            new Employee { id = 3, firstName = "Abraham", lastName = "Lincoln", department = "Management", salary = 110000},
            new Employee { id = 4, firstName = "Paul", lastName = "McCartney", department = "Music", salary = 10000000},
            new Employee { id = 5, firstName = "Ringo", lastName = "Starr", department = "Music", salary = 900000}
        };

        public long? id { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string department { get; set; }
        public decimal salary { get; set; }

        // Quick search function to mimic select where ID
        public static Employee findById(long? id)
        {
            foreach (Employee emp in Emps)
            {
                if (emp.id == id)
                {
                    return emp;
                }
            }
            return null;
        }

        public static Employee Update(Employee emp)
        {
            Employee found = Employee.findById(emp.id);
            if (found != null)
            {
                found.firstName = emp.firstName;
                found.lastName = emp.lastName;
                found.salary = emp.salary;
                found.department = emp.department;
            }
            else
            {
                if (emp.id == null)
                {
                    emp.id = DateTime.Now.Ticks;
                }
                Emps.Add(emp);
            }
            return emp;
        }
    }
}
