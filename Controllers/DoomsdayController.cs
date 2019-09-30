using System;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using sldoomsday.Providers;

namespace sldoomsday.Controllers
{
    [Route("api/[controller]")]
    public class DoomsdayController : Controller
    {
        public DoomsdayController()
        {
        }

        [HttpGet]
        public IActionResult Get()
        {
            DateTimeOffset devComplete = new DateTimeOffset(new DateTime(2021, 4, 12));
            DateTimeOffset eol = new DateTimeOffset(new DateTime(2021, 10, 1));

            var ret = new
            {
                devCompleteDate = devComplete,
                eolDate = eol,
            };

            return Ok(ret);
        }
    }
}
