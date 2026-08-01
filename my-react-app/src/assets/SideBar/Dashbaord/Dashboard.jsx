import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { useEffect } from 'react';


import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from "chart.js";
import "./dashboard.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
);



/* ============================================================================
   🔧 EDIT THIS DATA — everything below is the only place you need to touch
   to plug in your own numbers. Swap these out for API responses / props.
   ============================================================================ */
// ---- Page heading -----------------------------------------------------------
const PAGE_INFO = {
  title: "Enterprise Overview",
  subtitle: "System performance and sales health for August 2023.",
};
// ---- Top stat cards ---------------------------------------------------------
const STAT_CARDS = [
  {
    key: "totalSales",
    label: "Performace Pages",
    value:"ms",
    helperText:"ss",
    changeType: "up", // 'up' | 'down'
    icon: "bi-credit-card-2-front",
    iconBg: "#e7edff",
    iconColor: "#2f5fec",
  },
  {
    key: "totalUsers",
    label: "TOTAL USERS",
    value:"" ,
    changeText: "+8.1%",
    changeType: "up",
    icon: "bi-people-fill",
    iconBg: "#f1e9fc",
    iconColor: "#8a4fe0",
  },
  {
    key: "activeLogins",
    label: "ACTIVE LOGINS TODAY",
    value: "",
    badgeText: "Live Status",
    icon: "bi-lightning-charge-fill",
    iconBg: "#fdeee3",
    iconColor: "#e8772e",
  },
];
const RECENT_SALES = [
  
];
// allusers.map(ele =>{
//   RECENT_SALES.push({id:ele.id,initials:ele.name[0]+ele.name[1],name:ele.name,plan:ele.email})
// })
console.log(RECENT_SALES)
// ---- Line chart: User Login Activity ---------------------------------------
// Replace `labels` and `data` with your real 30-day series.
const LOGIN_ACTIVITY_CHART = {
  labels: [
    "Day 01",
    "Day 02",
    "Day 03",
    "Day 04",
    "Day 05",
    "Day 06",
    "Day 07",
    "Day 08",
    "Day 09",
    "Day 10",
    "Day 11",
    "Day 12",
    "Day 13",
    "Day 14",
    "Day 15",
    "Day 16",
    "Day 17",
    "Day 18",
    "Day 19",
    "Day 20",
    "Day 21",
    "Day 22",
    "Day 23",
    "Day 24",
    "Day 25",
    "Day 26",
    "Day 27",
    "Day 28",
    "Day 29",
    "Day 30",
  ],
  data: [
    320, 410, 380, 450, 500, 470, 530, 600, 580, 620, 590, 650, 700, 680, 720,
    690, 740, 760, 800, 780, 820, 850, 830, 870, 900, 880, 910, 940, 920, 960,
  ],
};

// ---- Recent Sales list -------------------------------------------------------


// ---- Bottom status strip -----------------------------------------------------


/* ============================================================================
   End of editable data
   ============================================================================ */

export default function Dashboard() {
  const [range, setRange] = useState("daily"); // example of local UI state, not chart data

  const chartData = {
    labels: LOGIN_ACTIVITY_CHART.labels,
    datasets: [
      {
        label: "Daily Logins",
        data: LOGIN_ACTIVITY_CHART.data,
        borderColor: "#c8102e",
        backgroundColor: (ctx) => {
          const { chart } = ctx;
          const { ctx: c, chartArea } = chart;
          if (!chartArea) return "rgba(200, 16, 46, 0.08)";
          const gradient = c.createLinearGradient(
            0,
            chartArea.top,
            0,
            chartArea.bottom,
          );
          gradient.addColorStop(0, "rgba(200, 16, 46, 0.25)");
          gradient.addColorStop(1, "rgba(200, 16, 46, 0)");
          return gradient;
        },
        fill: true,
        tension: 0.35,
        pointRadius: 0,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "#c8102e",
        borderWidth: 2.5,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: { mode: "index", intersect: false },
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#1f2433",
        padding: 10,
        cornerRadius: 8,
        displayColors: false,
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: {
          color: "#8a93a6",
          font: { size: 11 },
          // Show every ~7th label so it reads like the mock (Day 01, 08, 15, 22, 30)
          callback: function (val, index) {
            const label = this.getLabelForValue(val);
            const showOn = ["Day 01", "Day 08", "Day 15", "Day 22", "Day 30"];
            return showOn.includes(label) ? label.toUpperCase() : "";
          },
        },
      },
      y: {
        display: false,
        grid: { display: false },
      },
    },
  };


  return (
    <main className="sh-main">
      {/* ---------------- Heading ---------------- */}
      <div className="mb-4">
        <h4 className="fw-semibold mb-1">{PAGE_INFO.title}</h4>
        <p className="sh-subtitle mb-0">{PAGE_INFO.subtitle}</p>
      </div>

      {/* ---------------- Stat cards ---------------- */}
      <div className="row g-3 mb-3">
        {STAT_CARDS.map((card) => (
          <div className="col-12 col-md-4" key={card.key}>
            <div className="sh-card h-100 p-3">
              <div className="d-flex align-items-start justify-content-between mb-3">
              </div>

              <div className="sh-stat-label">{card.label}</div>
              <div className="sh-stat-value">{card.value}</div>
              <div className="sh-stat-helper">{card.helperText}</div>
            </div>
          </div>
        ))}
      </div>

      {/* ---------------- Chart + Recent Sales ---------------- */}
      <div className="row g-3 mb-3">
        {/* Chart card */}
        <div className="col-12 col-lg-8">
          <div className="sh-card h-100 p-3">
            <div className="d-flex flex-wrap align-items-start justify-content-between gap-2 mb-4">
              <div>
                <h6 className="fw-semibold mb-1">User Login Activity</h6>
                <p className="sh-subtitle mb-0">
                  User interaction frequency over the last 30 days
                </p>
              </div>

              <div className="d-flex align-items-center gap-2">
                <span className="sh-legend-dot"></span>
                <span className="sh-legend-label me-2">Daily Logins</span>
              </div>
            </div>

            <div className="sh-chart-wrap">
              <Line data={chartData} options={chartOptions} />
            </div>
          </div>
        </div>

        {/* Recent Sales card */}
        <div className="col-12 col-lg-4">
          <div className="sh-card h-100 p-3 d-flex flex-column">
            <div className="d-flex align-items-center justify-content-between mb-2">
              <h6 className="fw-semibold mb-0">Recent Login</h6>
            </div>

            <ul className="list-unstyled sh-sales-list flex-grow-1 mb-2">
              {RECENT_SALES.map((sale) => (
                <li
                  key={sale.id}
                  className="d-flex align-items-start justify-content-between py-2 sh-sale-row"
                >
                  <div className="d-flex align-items-start gap-2">
                    <div className="sh-avatar-sm d-flex align-items-center justify-content-center">
                      {sale.initials}
                    </div>
                    <div>
                      <div className="fw-semibold sh-sale-name">
                        {sale.name}
                      </div>
                      <div className="sh-sale-plan">{sale.plan}</div>
                    </div>
                  </div>
                  <div className="text-end">
                    <div className="fw-semibold sh-sale-amount">
                      {sale.amount}
                    </div>
                    
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

     
      
    </main>
  );
}