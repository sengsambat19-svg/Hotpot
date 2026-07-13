import  "./style/sidebar.css";

const Sidebar = () => {
  return (
    
  <aside className="sidebar">
    <div className="brand">RedPot Express</div>
    <div className="brand-sub">Downtown Branch</div>

    <div className="nav-item active"><i className="bi bi-receipt"></i><span>Orders</span></div>
    <div className="nav-item"><i className="bi bi-tools"></i><span>Menu Management</span></div>
    <div className="nav-item"><i className="bi bi-shop"></i><span>Store Settings</span></div>
    <div className="nav-item"><i className="bi bi-bar-chart"></i><span>Analytics</span></div>

    <div className="sidebar-foot">
      <button className="btn-new"><i className="bi bi-plus-lg me-1"></i> New Inventory</button>
      <div className="help"><i className="bi bi-question-circle"></i><span>Help Support</span></div>
    </div>
  </aside>
 
  )
}

export default Sidebar;