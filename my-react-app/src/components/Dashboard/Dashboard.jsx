import { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from "chart.js";
import "./Dashboard.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
);

const PAGE_INFO = {
  title: "Enterprise Overview",
  subtitle: "System performance and sales health for August 2023.",
};

const STAT_CARDS = [
  {
    key: "sales",
    label: "TOTAL SALES",
    value: "$48,290",
    changeText: "+12.4%",
    changeType: "up",
    icon: "bi-credit-card-2-front",
    iconBg: "#e7edff",
    iconColor: "#2f5fec",
  },
  {
    key: "users",
    label: "TOTAL USERS",
    value: "3,847",
    changeText: "+8.1%",
    changeType: "up",
    icon: "bi-people-fill",
    iconBg: "#f1e9fc",
    iconColor: "#8a4fe0",
  },
  {
    key: "logins",
    label: "ACTIVE LOGINS TODAY",
    value: "248",
    badgeText: "Live Status",
    icon: "bi-lightning-charge-fill",
    iconBg: "#fdeee3",
    iconColor: "#e8772e",
  },
];

const LOGIN_LABELS = Array.from({ length: 30 }, (_, i) => `Day ${String(i + 1).padStart(2, "0")}`);
const LOGIN_DATA = [
  320, 410, 380, 450, 500, 470, 530, 600, 580, 620,
  590, 650, 700, 680, 720, 690, 740, 760, 800, 780,
  820, 850, 830, 870, 900, 880, 910, 940, 920, 960,
];

const RECENT_LOGINS = [
  { id: 1, initials: "AC", name: "Alex Chen",     email: "alex@redpot.io",    time: "2m ago" },
  { id: 2, initials: "SM", name: "Sarah Miller",  email: "sarah@redpot.io",   time: "8m ago" },
  { id: 3, initials: "CW", name: "Chen Wei",      email: "chen@redpot.io",    time: "14m ago" },
  { id: 4, initials: "JW", name: "James Wilson",  email: "james@redpot.io",   time: "22m ago" },
  { id: 5, initials: "EL", name: "Eleanor Lane",  email: "eleanor@redpot.io", time: "31m ago" },
];

export default function Dashboard() {
  const [, setRange] = useState("daily");

  const chartData = {
    labels: LOGIN_LABELS,
    datasets: [
      {
        label: "Daily Logins",
        data: LOGIN_DATA,
        borderColor: "#c8102e",
        backgroundColor: (ctx) => {
          const { chart } = ctx;
          const { ctx: c, chartArea } = chart;
          if (!chartArea) return "rgba(200, 16, 46, 0.08)";
          const gradient = c.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
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
          callback: function (val) {
            const showOn = ["Day 01", "Day 08", "Day 15", "Day 22", "Day 30"];
            const label = this.getLabelForValue(val);
            return showOn.includes(label) ? label.toUpperCase() : "";
          },
        },
      },
      y: { display: false, grid: { display: false } },
    },
  };

  return (
    <main className="page">
      <div className="mb-4">
        <h4 className="fw-semibold mb-1">{PAGE_INFO.title}</h4>
        <p className="page-sub mb-0">{PAGE_INFO.subtitle}</p>
      </div>

      <div className="row g-3 mb-3">
        {STAT_CARDS.map((card) => (
          <div className="col-12 col-md-4" key={card.key}>
            <div className="card h-100 p-3">
              <div className="d-flex align-items-start justify-content-between mb-3">
                <div
                  className="sh-stat-icon"
                  style={{ background: card.iconBg, color: card.iconColor }}
                >
                  <i className={`bi ${card.icon}`}></i>
                </div>
                {card.changeText && (
                  <span className={`sh-change-pill sh-${card.changeType}`}>
                    {card.changeText}
                  </span>
                )}
                {card.badgeText && (
                  <span className="sh-badge-live">{card.badgeText}</span>
                )}
              </div>

              <div className="sh-stat-label">{card.label}</div>
              <div className="sh-stat-value">{card.value}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="row g-3 mb-3">
        <div className="col-12 col-lg-8">
          <div className="card h-100 p-3">
            <div className="d-flex flex-wrap align-items-start justify-content-between gap-2 mb-4">
              <div>
                <h6 className="fw-semibold mb-1">User Login Activity</h6>
                <p className="page-sub mb-0">User interaction frequency over the last 30 days</p>
              </div>
              <div className="d-flex align-items-center gap-2">
                <span className="sh-legend-dot"></span>
                <span className="sh-legend-label">Daily Logins</span>
              </div>
            </div>
            <div className="sh-chart-wrap">
              <Line data={chartData} options={chartOptions} />
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-4">
          <div className="card h-100 p-3 d-flex flex-column">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <h6 className="fw-semibold mb-0">Recent Login</h6>
            </div>
            <ul className="list-unstyled sh-sales-list flex-grow-1 mb-0">
              {RECENT_LOGINS.map((u) => (
                <li
                  key={u.id}
                  className="d-flex align-items-center justify-content-between py-2 sh-sale-row"
                >
                  <div className="d-flex align-items-center gap-2">
                    <div className="sh-avatar-sm">{u.initials}</div>
                    <div>
                      <div className="fw-semibold sh-sale-name">{u.name}</div>
                      <div className="sh-sale-plan">{u.email}</div>
                    </div>
                  </div>
                  <div className="text-muted small">{u.time}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
