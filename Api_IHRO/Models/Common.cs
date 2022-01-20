using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Api_IHRO.Models
{
    public partial class zdesk_m_location_tbl
    {
        public Nullable<int> location_id_pk { get; set; }
        public Nullable<int> business_unit_id_fk { get; set; }
        public string location_name { get; set; }
        public string business_unit { get; set; }
        public int is_active { get; set; }
        public Nullable<int> is_default { get; set; }
    }
}