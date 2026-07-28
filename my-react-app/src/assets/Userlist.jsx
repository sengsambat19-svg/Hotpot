import { useState } from "react";
import "./style/Userlist.css";

const Userlist = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Add Customer");

  const openModal = (title = "Add Customer") => {
    setModalTitle(title);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="cd-topbar">
        <button className="cd-select" type="button">
          ALL CUSTOMER <span className="ms-2">▾</span>
        </button>
        <input className="cd-search" placeholder="🔍   Search customer" />
        <button className="cd-add-link bg-danger" type="button" onClick={() => openModal("Add Customer")}>+ ADD CUSTOMER</button>
        <span className="cd-bell">🔔</span>
      </div>

      <div className="cd-shell">
        <div className="cd-card">
          <div className="d-flex align-items-center justify-content-between">
            <h1 className="cd-title">Customer</h1>
          </div>

          <table
            className="cd-table"
            onClick={(e) => {
              if (e.target.closest("button.cd-action")) {
                openModal("Edit Customer");
              }
            }}
          >
            <thead>
              <tr>
                <th>NAME ▾</th>
                <th>PHONE</th>
                <th>EMAIL</th>
                
                <th className="text-end">
                  ACTION <span className="cd-header-info">i</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="cd-name">Bess Goodman</td>
                <td>364-759-3783</td>

                <td>owen.hintz@hotmail.com</td>
                <td className="text-end">
                  <button className="cd-action" type="button">✎Edit</button>
                  <button className="cd-action" type="button">🗑Delete</button>
                </td>
              </tr>
               <tr>
                <td className="cd-name">Bess Goodman</td>
                <td>364-759-3783</td>
                <td>owen.hintz@hotmail.com</td>
                <td className="text-end">
                  <button className="cd-action" type="button">✎Edit</button>
                  <button className="cd-action" type="button">🗑Delete</button>
                </td>
              </tr>
               <tr>
                <td className="cd-name">Bess Goodman</td>
                <td>364-759-3783</td>
                <td>owen.hintz@hotmail.com</td>
                <td className="text-end">
                  <button className="cd-action" type="button">✎Edit</button>
                  <button className="cd-action" type="button">🗑Delete</button>
                </td>
              </tr>
               <tr>
                <td className="cd-name">Bess Goodman</td>
                <td>364-759-3783</td>
                <td>owen.hintz@hotmail.com</td>
                <td className="text-end">
                  <button className="cd-action" type="button">✎Edit</button>
                  <button className="cd-action" type="button">🗑Delete</button>
                </td>
              </tr>
               <tr>
                <td className="cd-name">Bess Goodman</td>
                <td>364-759-3783</td>
                <td>owen.hintz@hotmail.com</td>
                <td className="text-end">
                  <button className="cd-action" type="button">✎Edit</button>
                  <button className="cd-action" type="button">🗑Delete</button>
                </td>
              </tr>
               <tr>
                <td className="cd-name">Bess Goodman</td>
                <td>364-759-3783</td>
                <td>owen.hintz@hotmail.com</td>
                <td className="text-end">
                  <button className="cd-action" type="button">✎Edit</button>
                  <button className="cd-action" type="button">🗑Delete</button>
                </td>
              </tr>
               <tr>
                <td className="cd-name">Bess Goodman</td>
                <td>364-759-3783</td>
                <td>owen.hintz@hotmail.com</td>
                <td className="text-end">
                  <button className="cd-action" type="button">✎Edit</button>
                  <button className="cd-action" type="button">🗑Delete</button>
                </td>
              </tr>
               <tr>
                <td className="cd-name">Bess Goodman</td>
                <td>364-759-3783</td>
                <td>owen.hintz@hotmail.com</td>
                <td className="text-end">
                  <button className="cd-action" type="button">✎Edit</button>
                  <button className="cd-action" type="button">🗑Delete</button>
                </td>
              </tr>
              
             
             
            </tbody>
          </table>
        </div>
      </div>

      {isModalOpen && (
        <div className="cd-modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="cd-modal" onClick={(e) => e.stopPropagation()}>
            <div className="cd-modal-header">
              <h3>{modalTitle}</h3>
              <button className="cd-modal-close" type="button" onClick={() => setIsModalOpen(false)}>
                ×
              </button>
            </div>

            <div className="cd-modal-body">
              <label>
                Name
                <input type="text" placeholder="Enter customer name" />
              </label>
              <label>
                Phone
                <input type="text" placeholder="Enter phone number" />
              </label>
              <label>
                Email
                <input type="email" placeholder="Enter email" />
              </label>
            </div>

            <div className="cd-modal-footer">
              <button className="cd-btn-cancel" type="button" onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
              <button className="cd-btn-save" type="button">
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
    
  );
};

export default Userlist;
