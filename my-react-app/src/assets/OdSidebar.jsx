import "./style/odsidebar.css"

const OdSidebar = () => {
  return (
    <div className="app">
      <aside className="col-12 col-lg-3 col-xl-2 sidebar">
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

      <main className="col-12 col-lg-9 col-xl-10 p-4 p-lg-5">
        <div className="d-flex align-items-center justify-content-between mb-4 flex-wrap gap-3">
          <h4 className="brand mb-0">Admin Portal</h4>
          <div className="search-wrap flex-grow-1 mx-lg-4" style={{ maxWidth: '480px' }}>
            <i className="bi bi-search"></i>
            <input className="search" placeholder="Search orders..." />
          </div>
          <div className="d-flex align-items-center gap-3">
            <span className="pill-open"><span className="dot"></span>Store Open</span>
            <button className="icon-btn position-relative">
              <i className="bi bi-bell"></i>
              <span className="position-absolute top-0 end-0 dot-red"></span>
            </button>
            <button className="icon-btn"><i className="bi bi-person"></i></button>
          </div>
        </div>

        <div className="crumbs mb-2">Orders <span className="sep">›</span> Order Detail</div>
        <div className="d-flex align-items-start justify-content-between flex-wrap gap-3 mb-4">
          <div>
            <div className="order-title">Order #HP-20815 — Alex Chen</div>
            <div className="text-muted mt-1">
              <i className="bi bi-clock me-1"></i>Ordered 12 mins ago • ASAP Delivery
            </div>
          </div>
          <div className="d-flex gap-2">
            <button className="btn-outline-brand">Print Label</button>
            <button className="btn btn-brand">Mark as Ready</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OdSidebar;
