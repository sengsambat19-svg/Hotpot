import Topbar from "../Topbar/Topbar";
import "./Order.css";

const ORDER_CARDS = [
  {
    id: "HP-8821",
    time: "2 mins ago",
    typeIcon: "bi-bag",
    name: "Alex Thompson",
    items: [
      { label: "1x Signature Spicy Set (Large)", price: "$32.50" },
      { label: "2x A5 Wagyu Beef Strips", price: "$58.00" },
      { label: "1x Golden Fried Tofu Skin", price: "$6.50" },
    ],
    total: "$97.00",
  },
  {
    id: "HP-8822",
    time: "5 mins ago",
    typeIcon: "bi-flower1",
    typeIconClass: "leaf",
    name: "Sarah Miller",
    items: [
      { label: "1x Mushroom Medley Set", price: "$28.00" },
      { label: "1x Hand-Pulled Noodles", price: "$4.50" },
      { label: "1x Lotus Root Slices", price: "$5.50" },
    ],
    total: "$38.00",
  },
  {
    id: "HP-8823",
    urgent: true,
    typeIcon: "bi-scooter",
    typeIconClass: "scooter",
    name: "Chen Wei",
    items: [
      { label: "4x Ultimate Seafood Combo", price: "$180.00" },
      { label: "2x Scallop Skewers", price: "$12.00" },
      { label: "4x Plum Juice (Bottle)", price: "$16.00" },
    ],
    total: "$208.00",
  },
  {
    id: "HP-8824",
    time: "8 mins ago",
    typeIcon: "bi-cup-hot",
    name: "James Wilson",
    items: [
      { label: "1x Tomato Broth Base", price: "$12.00" },
      { label: "3x Prime Pork Slices", price: "$27.00" },
    ],
    total: "$39.00",
  },
];

const OrderCard = ({ order }) => (
  <article className="order-card">
    <div className="order-head">
      {order.urgent ? (
        <span className="urgent">
          <i className="bi bi-exclamation-circle"></i> Urgent
        </span>
      ) : (
        <span className="time">
          <i className="bi bi-stopwatch"></i> {order.time}
        </span>
      )}
      <span className="tag">#{order.id}</span>
      <span className={`type-icon ${order.typeIconClass || ""}`}>
        <i className={`bi ${order.typeIcon}`}></i>
      </span>
    </div>

    <div className="cust">{order.name}</div>

    <ul className="items">
      {order.items.map((item, i) => (
        <li key={i}>
          <span>{item.label}</span>
          <span className="price">{item.price}</span>
        </li>
      ))}
    </ul>

    <div className="divider"></div>

    <div className="total">
      <span className="lbl">Total Amount</span>
      <span className="amt">{order.total}</span>
    </div>

    <div className="actions">
      <button type="button" className="btn-accept">Accept Order</button>
      <button type="button" className="btn-details">View Details</button>
    </div>
  </article>
);

const Order = () => {
  return (
    <section className="page page-orders">
      <Topbar />

      <div className="orders-content">
        <h2 className="page-title">Incoming Orders</h2>
        <p className="page-sub">Monitor and manage real-time orders as they come in</p>

        <div className="grid">
          {ORDER_CARDS.map((o) => (
            <OrderCard key={o.id} order={o} />
          ))}

          <div className="empty" style={{ gridColumn: "span 2" }}>
            <span className="hg"><i className="bi bi-hourglass-split"></i></span>
            <h6>Waiting for new orders…</h6>
            <div>Incoming orders will appear here</div>
          </div>
        </div>

        <div className="status-bar">
          <div className="item"><i className="bi bi-receipt-cutoff"></i> <strong>24</strong> Orders Active</div>
          <div className="item"><i className="bi bi-clock-history"></i> <strong>12m</strong> Prep Time</div>
          <div className="sep"></div>
          <button type="button" className="refresh" aria-label="Refresh">
            <i className="bi bi-arrow-clockwise"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Order;