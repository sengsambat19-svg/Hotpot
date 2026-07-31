import { useState } from "react"
import "./style/menu-management.css"
import Modal from "./Modal"

const MenuManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
    <main className="menu-management-page py-4 px-4 px-lg-5">

  <div className="d-flex align-items-center justify-content-between mb-4 gap-3">
    <div className="search flex-grow-1">
      <i className="bi bi-search text-muted"></i>
      <input placeholder="Search menu items…" />
    </div>
    <div className="d-flex align-items-center gap-3">
      <button className="icon-btn"><i className="bi bi-bell"></i></button>
      <button className="icon-btn"><i className="bi bi-question-lg"></i></button>
      <div className="avatar"></div>
    </div>
  </div>


  <div className="d-flex justify-content-between align-items-start mb-4">
    <div>
      <h1 className="page-title mb-1">Menu Management</h1>
      <div className="text-muted">Manage your inventory, pricing, and availability.</div>
    </div>
    <button className="btn-brand" onClick={() => setIsModalOpen(true)}><i className="bi bi-plus-lg me-1"></i> Add New Item</button>
  </div>


  <div className="row g-3 mb-4">
    <div className="col-md-3 col-6"><div className="stat"><div className="label">TOTAL ITEMS</div><div className="value">142</div></div></div>
    <div className="col-md-3 col-6"><div className="stat"><div className="label">ACTIVE</div><div className="value">128</div></div></div>
    <div className="col-md-3 col-6"><div className="stat alert"><div className="label">OUT OF STOCK</div><div className="value">14</div></div></div>
    <div className="col-md-3 col-6"><div className="stat"><div className="label">AVG. ITEM PRICE</div><div className="value">$12.45</div></div></div>
  </div>


  <div className="panel mb-4">
    <div className="d-flex flex-wrap align-items-center justify-content-between p-3 px-4 border-bottom" style={{borderColor:"var(--line)"}}>
      <div className="d-flex flex-wrap gap-1">
        <button className="chip active">All Items</button>
        <button className="chip">Meat</button>
        <button className="chip">Seafood</button>
        <button className="chip">Vegetables</button>
        <button className="chip">Sauces</button>
        <button className="chip">Sets</button>
      </div>
      <div className="d-flex align-items-center gap-2">
        <span className="text-muted small">Sort by:</span>
        <select className="sort-select">
          <option>Newest First</option>
          <option>Price</option>
          <option>Name</option>
        </select>
      </div>
    </div>

    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th>PRODUCT</th><th>CATEGORY</th><th>PRICE</th><th>STATUS</th><th className="text-end">ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="d-flex align-items-center gap-3">
                <div className="thumb" style={{background:"#fce8ec"}}></div>
                <div>
                  <div className="fw-semibold">Premium Wagyu Slices</div>
                  <div className="sku">SKU: HP-ME-001</div>
                </div>
              </div>
            </td>
            <td><span className="cat-pill">Meat</span></td>
            <td className="fw-semibold">$24.99</td>
            <td><span className="status active"><span className="dot"></span>Active</span></td>
            <td className="text-end">
              <button className="row-btn"><i className="bi bi-pencil"></i></button>
              <button className="row-btn"><i className="bi bi-trash"></i></button>
            </td>
          </tr>
    
        </tbody>
      </table>
    </div>

    <div className="d-flex justify-content-between align-items-center p-3 px-4 border-top" style={{borderColor:"var(--line)"}}>
      <div className="text-muted small">Showing 1 to 5 of 142 items</div>
      <div className="pager d-flex align-items-center gap-1">
        <button className="page"><i className="bi bi-chevron-left"></i></button>
        <button className="page active">1</button>
        <button className="page">2</button>
        <button className="page">3</button>
        <button className="page">…</button>
        <button className="page">29</button>
        <button className="page"><i className="bi bi-chevron-right"></i></button>
      </div>
    </div>
  </div>

  
  <div className="row g-3 mb-4">
    <div className="col-lg-8">
      <div className="footer-card alert d-flex gap-3">
        <div className="alert-icon"><i className="bi bi-info-lg"></i></div>
        <div>
          <div className="fw-bold mb-1">Inventory Alert</div>
          <div className="text-muted small">
            Four items from the "Seafood" category have reached low stock levels. We recommend contacting your supplier soon to avoid disruption during the weekend rush.
          </div>
          <a href="#" className="mt-2 d-inline-block fw-semibold text-decoration-none" style={{color:"var(--brand)"}}>
            View Low Stock Items →
          </a>
        </div>
      </div>
    </div>
    <div className="col-lg-4">
      <div className="footer-card h-100">
        <div className="fw-bold mb-1">Menu Export</div>
        <div className="text-muted small mb-3">Download current menu as PDF or Excel for offline review.</div>
        <div className="d-flex gap-2">
          <button className="export-btn">Excel</button>
          <button className="export-btn">PDF</button>
        </div>
      </div>
    </div>
  </div>
</main>

    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}

export default MenuManagement