import { useSide } from "../../context/SidebarContext";
import "./Sidebar.css";

const navItems = [
  { id: 0, label: "Orders", icon: "bi bi-receipt" },
  { id: 1, label: "Menu Management", icon: "bi bi-tools" },
  { id: 2, label: "Dashboard", icon: "bi bi-bar-chart" },
  { id: 3, label: "User List", icon: "bi bi-person-lines-fill" },
  { id: 4, label: "Product Table", icon: "bi bi-shop" },
  { id: 5, label: "Admin List", icon: "bi bi-shield-lock" },
];

const Sidebar = () => {
  const { tab, settab } = useSide();

  return (
    <aside className="sidebar">
      <div className="brand">RedPot Express</div>
      <div className="brand-sub">Downtown Branch</div>

      <nav className="nav">
        {navItems.map((item) => (
          <button
            type="button"
            key={item.id}
            className={`nav-item ${tab === item.id ? "active" : ""}`}
            onClick={() => settab(item.id)}
          >
            <i className={item.icon}></i>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="sidebar-foot">
        <button type="button" className="btn-brand">
          <i className="bi bi-plus-lg me-1"></i> New Inventory
        </button>
        <div className="help">
          <i className="bi bi-question-circle"></i>
          <span>Help Support</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
