using CleanIndia.Handler;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CleanIndia.Controllers
{
    public class BaseController : Controller
    {
        //
        // GET: /Base/
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult LiveMap()
        {
            LiveTrackHandler handler = new LiveTrackHandler();
            var detail = handler.getVoteDetail();
            return View(detail);
        }
	}
}