using EmployeeMvcAngular.Entities;
using EmployeeMvcAngular.Models;
using System;
using System.Linq;
using System.Web.Mvc;

namespace EmployeeMvcAngular.Controllers
{
    public class HomeController : Controller
    {
        ApplicationDbContext dbContext = new ApplicationDbContext();

        public ActionResult Index()
        {
            return View();
        }

        public JsonResult GetAll()
        {
            var employeeList = dbContext.Employees.ToList();
            return Json(employeeList, JsonRequestBehavior.AllowGet);
        }

        public JsonResult GetEmployeeByNo(string empNo)
        {
            int no = Convert.ToInt32(empNo);
            var employeeList = dbContext.Employees.Find(no);
            return Json(employeeList, JsonRequestBehavior.AllowGet);
        }

        public string UpdateEmployee(Employee emp)
        {
            if (emp != null)
            {
                int no = Convert.ToInt32(emp.ID);
                var employeeList = dbContext.Employees.Where(e => e.ID == no).FirstOrDefault();
                employeeList.Name = emp.Name;
                employeeList.MobileNumber = emp.MobileNumber;
                employeeList.Email = emp.Email;
                dbContext.SaveChanges();

                return "Employee Updated";
            }
            else
            {
                return "Invalid Employee";
            }
        }

        public string AddEmployee(Employee emp)
        {
            if (emp != null)
            {
                dbContext.Employees.Add(emp);
                dbContext.SaveChanges();
                return "Employee Updated";
            }
            else
            {
                return "Invalid Employee";
            }
        }
    }
}