using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using PetaPoco;
using Api_IHRO.Models;

namespace Api_IHRO.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class CommonApiController : ApiController
    {
        [HttpGet]
        public IEnumerable<zdesk_m_location_tbl> GetLocation()
        {
            var db = new Database("Constr");
            db.EnableAutoSelect = false;
            return db.Query<zdesk_m_location_tbl>("exec zdesk_m_get_location_sp");
        }
    }
}
