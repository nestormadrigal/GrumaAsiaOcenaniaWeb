using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Gruma.Views.Recipes
{
    public class RecipesController : Controller
    {
        //
        // GET: /Recipes/

        public ActionResult Index()
        {
            return View();
        }
        public ActionResult MyMissionFoods()
        {
            ViewBag.Message = "My mission foods";
            return View("MyMissionFoods");
        }

        public ActionResult RecipeDetail()
        {
            ViewBag.Messsagee = "Recipe Detail";
            return View();
        }
       
    }
}
