using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GreatProject.Controllers
{     public class FeedsController : Controller
    {
        // GET: FeedsController
        public ActionResult Index()
        {
            return View();
        }

        // GET: FeedsController/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: FeedsController/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: FeedsController/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: FeedsController/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: FeedsController/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: FeedsController/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: FeedsController/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
    }
}
