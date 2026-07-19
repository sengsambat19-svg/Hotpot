import "./style/odsidebar.css"

const OdSidebar = () => {
  return (
    <div className="container-fluid p-0">
  <div className="d-flex">
    <aside className="sidebar">
      <div className="mb-4">
        <div className="brand">RedPot Express</div>
        <div className="brand-sub">Downtown Branch</div>
      </div>
      <nav className="d-flex flex-column gap-1">
        <a className="nav-item-custom active"><i className="bi bi-receipt"></i> Orders</a>
        <a className="nav-item-custom"><i className="bi bi-tools"></i> Menu Management</a>
        <a className="nav-item-custom"><i className="bi bi-shop"></i> Store Settings</a>
        <a className="nav-item-custom"><i className="bi bi-bar-chart"></i> Analytics</a>
      </nav>
      <div className="mt-5">
        <button className="btn btn-brand w-100"><i className="bi bi-plus-lg me-1"></i> New Inventory</button>
      </div>
      <div className="mt-4 nav-item-custom"><i className="bi bi-question-circle"></i> Help Support</div>
    </aside>
  </div>
</div>

    
  )
}

export default OdSidebar
