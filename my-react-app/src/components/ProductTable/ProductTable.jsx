import "./ProductTable.css";

const STAT_CARDS = [
  {
    key: "incoming",
    label: "Incoming",
    value: 24,
    accent: "red",
    icon: "bi-clipboard",
    badge: { text: "+12%", color: "red" },
  },
  {
    key: "progress",
    label: "In Progress",
    value: 18,
    accent: "teal",
    icon: "bi-fire",
    badge: { text: "Active", color: "gray" },
  },
  {
    key: "completed",
    label: "Completed",
    value: 142,
    icon: "bi-check-circle",
    badge: { text: "Today", color: "gray" },
  },
  {
    key: "revenue",
    label: "Daily Revenue",
    value: "$3,420",
    icon: "bi-cash",
    accent: "navy",
    badge: { text: "Record", color: "red" },
  },
];

const ROWS = [
  {
    id: "HP-9842",
    initials: "EL",
    name: "Eleanor Lane",
    sub: "Express Delivery",
    item: "Spicy Wagyu Set",
    itemSub: "+ 4 sides",
    thumb: "https://images.unsplash.com/photo-1544025162-d76694265947?w=100&q=60",
    amount: "$84.50",
    time: "02:14 PM",
    status: "incoming",
    cancelled: false,
  },
  {
    id: "HP-9830",
    initials: "DH",
    name: "David Ho",
    sub: "Self-Pickup",
    item: "Beef Trio Feast",
    thumb: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=100&q=60",
    amount: "$62.00",
    time: "12:45 PM",
    status: "cancelled",
    cancelled: true,
  },
];

const ProductTable = () => {
  return (
    <>
      <main className="page page-products">
        <div className="pt-header">
          <h2 className="page-title">Orders</h2>
          <div className="pt-search">
            <i className="bi bi-search"></i>
            <input type="text" placeholder="Search orders, customers, or items..." />
          </div>
          <div className="pt-header-actions">
            <button type="button" className="icon-btn" aria-label="Notifications">
              <i className="bi bi-bell"></i>
              <span className="dot-red"></span>
            </button>
            <button type="button" className="icon-btn" aria-label="Settings">
              <i className="bi bi-gear"></i>
            </button>
            <img className="avatar-lg" src="https://i.pravatar.cc/80?img=12" alt="profile" />
          </div>
        </div>

        <div className="row g-3">
          {STAT_CARDS.map((c) => (
            <div className="col-md-3" key={c.key}>
              <div className={`stat-card ${c.accent ? `accent-${c.accent}` : ""}`}>
                <div className="d-flex justify-content-between align-items-start">
                  <div className={`stat-icon ${c.accent || "gray"}`}>
                    <i className={`bi ${c.icon}`}></i>
                  </div>
                  <span className={`badge-pill ${c.badge.color}`}>{c.badge.text}</span>
                </div>
                <div className="stat-label">{c.label}</div>
                <div className={`stat-value ${c.accent || ""}`}>{c.value}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="filter-bar">
          <button type="button" className="pill-btn active">All Orders</button>
          <button type="button" className="pill-btn">Incoming</button>
          <button type="button" className="pill-btn">In Progress</button>
          <button type="button" className="pill-btn">Completed</button>
          <input type="date" className="date-input ms-auto" />
          <button type="button" className="ghost-btn">
            <i className="bi bi-sliders"></i> Filters
          </button>
          <button type="button" className="ghost-btn">
            <i className="bi bi-download"></i> Export
          </button>
        </div>

        <div className="order-table-wrap">
          <table className="table mb-0">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Items</th>
                <th>Amount</th>
                <th>Time</th>
                <th>Status</th>
                <th className="text-end">Actions</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r) => (
                <tr key={r.id} className={r.cancelled ? "row-cancelled" : ""}>
                  <td className="order-id">#{r.id}</td>
                  <td>
                    <div className="d-flex align-items-center gap-2">
                      <div className="cust-avatar">{r.initials}</div>
                      <div>
                        <div className="customer-name">{r.name}</div>
                        <div className="customer-sub">{r.sub}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center gap-2">
                      <img className="item-thumb" src={r.thumb} alt="" />
                      <span className="item-name">
                        {r.item}
                        {r.itemSub && (<><br />{r.itemSub}</>)}
                      </span>
                    </div>
                  </td>
                  <td className="amount">{r.amount}</td>
                  <td>{r.time}</td>
                  <td>
                    <span className={`status-badge status-${r.status}`}>
                      {r.status.toUpperCase()}
                    </span>
                  </td>
                  <td className="text-end">
                    <i className="bi bi-eye action-icon"></i>
                    <i className="bi bi-printer action-icon"></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="table-footer">
            <span>Showing 1 to 4 of 248 orders</span>
            <div className="d-flex align-items-center gap-2">
              <button type="button" className="page-btn"><i className="bi bi-chevron-left"></i></button>
              <button type="button" className="page-btn active">1</button>
              <button type="button" className="page-btn">2</button>
              <button type="button" className="page-btn">3</button>
              <button type="button" className="page-btn" style={{ border: "none" }}>…</button>
              <button type="button" className="page-btn">24</button>
            </div>
          </div>
        </div>
      </main>

      <button type="button" className="fab" aria-label="Add">
        <i className="bi bi-plus-lg"></i>
      </button>
    </>
  );
};

export default ProductTable;