﻿using System;
using System.Collections.Generic;

namespace PublicApi.Database
{
    public partial class Metric
    {
        public int MetricId { get; set; }
        public int WebRequestId { get; set; }
        public string MetricCode { get; set; }
        public DateTime Started { get; set; }
        public DateTime Ended { get; set; }

        public MetricType MetricCodeNavigation { get; set; }
        public WebRequest WebRequest { get; set; }
    }
}
