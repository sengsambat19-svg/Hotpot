import "./style/product-table.css";

const ProductTable = () => {
  return (
    <>
      <div className="main">
        <div className="topbar">
          <h2>Orders</h2>
          <div className="search-wrap">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search orders, customers, or items..." />
          </div>
          <div className="d-flex align-items-center gap-3">
            <div className="icon-btn">
              <i className="fa-regular fa-bell"></i>
              <span className="dot"></span>
            </div>
            <div className="icon-btn">
              <i className="fa-solid fa-gear"></i>
            </div>
            <img className="avatar" src="https://i.pravatar.cc/80?img=12" alt="profile" />
          </div>
        </div>

        {/* Stat cards */}
        <div className="row g-3">
          <div className="col-md-3">
            <div className="stat-card accent-red">
              <div className="d-flex justify-content-between align-items-start">
                <div className="stat-icon red">
                  <i className="fa-regular fa-clipboard"></i>
                </div>
                <span className="badge-pill red">+12%</span>
              </div>
              <div className="stat-label">Incoming</div>
              <div className="stat-value red">24</div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="stat-card accent-teal">
              <div className="d-flex justify-content-between align-items-start">
                <div className="stat-icon teal">
                  <i className="fa-solid fa-fire-burner"></i>
                </div>
                <span className="badge-pill gray">Active</span>
              </div>
              <div className="stat-label">In Progress</div>
              <div className="stat-value teal">18</div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="stat-card">
              <div className="d-flex justify-content-between align-items-start">
                <div className="stat-icon gray">
                  <i className="fa-regular fa-circle-check"></i>
                </div>
                <span className="badge-pill gray">Today</span>
              </div>
              <div className="stat-label">Completed</div>
              <div className="stat-value">142</div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="stat-card">
              <div className="d-flex justify-content-between align-items-start">
                <div className="stat-icon navy">
                  <i className="fa-regular fa-money-bill-1"></i>
                </div>
                <span className="badge-pill red">Record</span>
              </div>
              <div className="stat-label">Daily Revenue</div>
              <div className="stat-value navy">$3,420</div>
            </div>
          </div>
        </div>

        {/* Filter bar */}
        <div className="filter-bar">
          <button className="pill-btn active">All Orders</button>
          <button className="pill-btn">Incoming</button>
          <button className="pill-btn">In Progress</button>
          <button className="pill-btn">Completed</button>
          <input type="date" className="date-input ms-auto" />
          <button className="ghost-btn">
            <i className="fa-solid fa-sliders"></i> Filters
          </button>
          <button className="ghost-btn">
            <i className="fa-solid fa-download"></i> Export
          </button>
        </div>

        {/* Table */}
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
              <tr>
                <td className="order-id">#HP-9842</td>
                <td>
                  <div className="d-flex align-items-center gap-2">
                    <div className="cust-avatar" style={{ background: "#c81e3a" }}>
                      EL
                    </div>
                    <div>
                      <div className="customer-name">Eleanor Lane</div>
                      <div className="customer-sub">Express Delivery</div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="d-flex align-items-center gap-2">
                    <img
                      className="item-thumb"
                      src="https://images.unsplash.com/photo-1544025162-d76694265947?w=100&q=60"
                      alt=""
                    />
                    <span className="item-name">
                      Spicy Wagyu Set
                      <br />+ 4 sides
                    </span>
                  </div>
                </td>
                <td className="amount">$84.50</td>
                <td>02:14 PM</td>
                <td>
                  <span className="status-badge status-incoming">INCOMING</span>
                </td>
                <td className="text-end">
                  <i className="fa-regular fa-eye action-icon"></i>
                  <i className="fa-solid fa-print action-icon"></i>
                </td>
              </tr>
              <tr className="row-cancelled">
                <td className="order-id" style={{ color: "#d7a8b3" }}>
                  #HP-9830
                </td>
                <td>
                  <div className="d-flex align-items-center gap-2">
                    <div className="cust-avatar" style={{ background: "#f1cfd6", color: "#b7b9c2" }}>
                      DH
                    </div>
                    <div>
                      <div className="customer-name">David Ho</div>
                      <div className="customer-sub">Self-Pickup</div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="d-flex align-items-center gap-2">
                    <img
                      className="item-thumb"
                      style={{ opacity: ".4" }}
                      src="https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=100&q=60"
                      alt=""
                    />
                    <span className="item-name">Beef Trio Feast</span>
                  </div>
                </td>
                <td className="amount">$62.00</td>
                <td>12:45 PM</td>
                <td>
                  <span className="status-badge status-cancelled">CANCELLED</span>
                </td>
                <td className="text-end">
                  <i className="fa-regular fa-eye action-icon muted"></i>
                  <i className="fa-solid fa-print action-icon muted"></i>
                </td>
              </tr>
            </tbody>
          </table>

          <div className="table-footer">
            <span>Showing 1 to 4 of 248 orders</span>
            <div className="d-flex align-items-center gap-2">
              <div className="page-btn">
                <i className="fa-solid fa-chevron-left"></i>
              </div>
              <div className="page-btn active">1</div>
              <div className="page-btn">2</div>
              <div className="page-btn">3</div>
              <div className="page-btn" style={{ border: "none" }}>
                ...
              </div>
              <div className="page-btn">24</div>
            </div>
          </div>
        </div>
      </div>

      <button className="fab">
        <i className="fa-solid fa-plus"></i>
      </button>
    </>
  );
};

export default ProductTable;
