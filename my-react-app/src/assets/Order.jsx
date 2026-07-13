import "./style/order.css";

const Order = () => {
  return (
        <section className="main">
          <div className="topbar">
            <div className="d-flex align-items-center gap-3">
              <h1 className="title">Admin Portal</h1>
              <span className="pill">
                <span className="dot"></span> Store Open
              </span>
            </div>
            <div className="d-flex align-items-center gap-3">
              <button className="icon-btn">
                <i className="bi bi-bell"></i>
                <span className="badge-dot"></span>
              </button>
              <span className="avatar">
                <i className="bi bi-person"></i>
              </span>
              <span className="role">Branch Manager</span>
            </div>
          </div>

          <div className="content">
            <h2 className="h-orders">Incoming Orders</h2>
            <p className="sub">
              Monitor and manage real-time orders as they come in
            </p>

            <div className="grid">
              <article className="order">
                <div className="order-head">
                  <span className="tag">#HP-8821</span>
                  <span className="time">
                    <i className="bi bi-stopwatch"></i> 2 mins ago
                  </span>
                  <span className="type-icon">
                    <i className="bi bi-bag"></i>
                  </span>
                </div>
                <div className="cust">Alex Thompson</div>
                <ul className="items">
                  <li>
                    <span>1x Signature Spicy Set (Large)</span>
                    <span className="price">$32.50</span>
                  </li>
                  <li>
                    <span>2x A5 Wagyu Beef Strips</span>
                    <span className="price">$58.00</span>
                  </li>
                  <li>
                    <span>1x Golden Fried Tofu Skin</span>
                    <span className="price">$6.50</span>
                  </li>
                </ul>
                <div className="divider"></div>
                <div className="total">
                  <span className="lbl">Total Amount</span>
                  <span className="amt">$97.00</span>
                </div>
                <div className="actions">
                  <button className="btn-accept">Accept Order</button>
                  <button className="btn-details">View Details</button>
                </div>
              </article>

              <article className="order">
                <div className="order-head">
                  <span className="tag">#HP-8822</span>
                  <span className="time">
                    <i className="bi bi-stopwatch"></i> 5 mins ago
                  </span>
                  <span className="type-icon leaf">
                    <i className="bi bi-flower1"></i>
                  </span>
                </div>
                <div className="cust">Sarah Miller</div>
                <ul className="items">
                  <li>
                    <span>1x Mushroom Medley Set</span>
                    <span className="price">$28.00</span>
                  </li>
                  <li>
                    <span>1x Hand-Pulled Noodles</span>
                    <span className="price">$4.50</span>
                  </li>
                  <li>
                    <span>1x Lotus Root Slices</span>
                    <span className="price">$5.50</span>
                  </li>
                </ul>
                <div className="divider"></div>
                <div className="total">
                  <span className="lbl">Total Amount</span>
                  <span className="amt">$38.00</span>
                </div>
                <div className="actions">
                  <button className="btn-accept">Accept Order</button>
                  <button className="btn-details">View Details</button>
                </div>
              </article>

              <article className="order">
                <div className="order-head">
                  <span className="urgent">
                    <i className="bi bi-exclamation-circle"></i> Urgent
                  </span>
                  <span className="tag">#HP-8823</span>
                  <span className="type-icon scooter">
                    <i className="bi bi-scooter"></i>
                  </span>
                </div>
                <div className="cust">Chen Wei</div>
                <ul className="items">
                  <li>
                    <span>4x Ultimate Seafood Combo</span>
                    <span className="price">$180.00</span>
                  </li>
                  <li>
                    <span>2x Scallop Skewers</span>
                    <span className="price">$12.00</span>
                  </li>
                  <li>
                    <span>4x Plum Juice (Bottle)</span>
                    <span className="price">$16.00</span>
                  </li>
                </ul>
                <div className="divider"></div>
                <div className="total">
                  <span className="lbl">Total Amount</span>
                  <span className="amt">$208.00</span>
                </div>
                <div className="actions">
                  <button className="btn-accept">Accept Order</button>
                  <button className="btn-details">View Details</button>
                </div>
              </article>

              <article className="order">
                <div className="order-head">
                  <span className="tag">#HP-8824</span>
                  <span className="time">
                    <i className="bi bi-stopwatch"></i> 8 mins ago
                  </span>
                  <span className="type-icon">
                    <i className="bi bi-cup-hot"></i>
                  </span>
                </div>
                <div className="cust">James Wilson</div>
                <ul className="items">
                  <li>
                    <span>1x Tomato Broth Base</span>
                    <span className="price">$12.00</span>
                  </li>
                  <li>
                    <span>3x Prime Pork Slices</span>
                    <span className="price">$27.00</span>
                  </li>
                </ul>
                <div className="divider"></div>
                <div className="total">
                  <span className="lbl">Total Amount</span>
                  <span className="amt">$39.00</span>
                </div>
                <div className="actions">
                  <button className="btn-accept">Accept Order</button>
                  <button className="btn-details">View Details</button>
                </div>
              </article>
                    <div className="empty" style={{ gridColumn: "span 2" }}>
          <span className="hg"><i className="bi bi-hourglass-split"></i></span>
          <h6>Waiting for new orders…</h6>
          <div>Incoming orders will appear here</div>
        </div>
      </div>

      <div className="status">
        <div className="item"><i className="bi bi-receipt-cutoff"></i> <strong>24</strong> Orders Active</div>
        <div className="item"><i className="bi bi-clock-history"></i> <strong>12m</strong> Prep Time</div>
        <div className="sep"></div>
        <button className="refresh"><i className="bi bi-arrow-clockwise"></i></button>
      </div>
            </div>
        </section>
     
  );
};

export default Order;
