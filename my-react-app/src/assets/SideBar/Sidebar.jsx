import { useSide } from "../../ContextSidebar";
import  "./sidebar.css";

const Sidebar = () => {
  const [tab, settab] = useSide();

  const navItems = [
    { id: 2, label: "Dashboard", icon: "bi bi-bar-chart" },
    { id: 1, label: "Menu Management", icon: "bi bi-tools" },
    { id: 4, label: "Product Table", icon: "bi bi-shop" },
    { id: 0, label: "Orders", icon: "bi bi-receipt" },
    { id: 3, label: "User List", icon: "bi bi-person-lines-fill" }
  ];

  return (
    <aside className="sidebar">
      <div className="brand">RedPot Express</div>
      <div className="brand-sub">Downtown Branch</div>

      {navItems.map((item) => (
        <div
          key={item.id}
          className={`nav-item ${tab === item.id ? "active" : ""}`}
          onClick={() => settab(item.id)}
        >
          <i className={item.icon}></i>
          <span>{item.label}</span>
        </div>
      ))}

      <div className="sidebar-foot">
        <button className="btn-new">
          <i className="bi bi-plus-lg me-1"></i> New Inventory
        </button>
        <div className="help">
          <i className="bi bi-question-circle"></i>
          <span>Help Support</span>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;