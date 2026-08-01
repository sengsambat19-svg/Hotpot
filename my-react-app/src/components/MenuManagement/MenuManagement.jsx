import { useState } from "react";
import Topbar from "../Topbar/Topbar";
import Modal from "../Modal/Modal";
import "./MenuManagement.css";

const STATS = [
  { label: "TOTAL ITEMS", value: 142 },
  { label: "ACTIVE", value: 128 },
  { label: "OUT OF STOCK", value: 14, alert: true },
  { label: "AVG. ITEM PRICE", value: "$12.45" },
];

const CATEGORIES = [
  "All Items",
  "Meat",
  "Seafood",
  "Vegetables",
  "Sauces",
  "Sets",
];

const MenuManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <main className="menu-management-page">
        <Topbar />

        <div className="mm-content">
          <div className="d-flex justify-content-between align-items-start mb-4">
            <div>
              <h1 className="page-title mb-1">Menu Management</h1>
              <p className="page-sub mb-0">
                Manage your inventory, pricing, and availability.
              </p>
            </div>
            <button
              type="button"
              className="btn-brand"
              onClick={() => setIsModalOpen(true)}
            >
              <i className="bi bi-plus-lg me-1"></i> Add New Item
            </button>
          </div>

          <div className="row g-3 mb-4">
            {STATS.map((s) => (
              <div className="col-md-3 col-6" key={s.label}>
                <div className={`stat ${s.alert ? "alert" : ""}`}>
                  <div className="label">{s.label}</div>
                  <div className="value">{s.value}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="panel mb-4">
            <div className="panel-head">
              <div className="chips">
                {CATEGORIES.map((c, i) => (
                  <button
                    type="button"
                    key={c}
                    className={`chip ${i === 0 ? "active" : ""}`}
                  >
                    {c}
                  </button>
                ))}
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
                    <th>PRODUCT</th>
                    <th>CATEGORY</th>
                    <th>PRICE</th>
                    <th>STATUS</th>
                    <th className="text-end">ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center gap-3">
                        <div
                          className="thumb"
                          style={{ background: "#fce8ec" }}
                        ></div>
                        <div>
                          <div className="fw-semibold">
                            Premium Wagyu Slices
                          </div>
                          <div className="sku">SKU: HP-ME-001</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="cat-pill">Meat</span>
                    </td>
                    <td className="fw-semibold">$24.99</td>
                    <td>
                      <span className="status active">
                        <span className="dot"></span>Active
                      </span>
                    </td>
                    <td className="text-end">
                      <button
                        type="button"
                        className="row-btn"
                        aria-label="Edit"
                      >
                        <i className="bi bi-pencil"></i>
                      </button>
                      <button
                        type="button"
                        className="row-btn"
                        aria-label="Delete"
                      >
                        <i className="bi bi-trash"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default MenuManagement;
