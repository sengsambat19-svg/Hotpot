import { useState } from "react";
import Usermodal from "../../Modal/Usermodal";
import "./Userlist.css";

const initialCustomers = [
  { id: 1, name: "Bess Goodman", phone: "364-759-3783", email: "owen.hintz@hotmail.com" },
  { id: 2, name: "Mina Patel", phone: "214-555-0199", email: "mina.patel@gmail.com" },
  { id: 3, name: "Noah Kim", phone: "310-555-0147", email: "noah.kim@yahoo.com" },
  { id: 4, name: "Ava Thompson", phone: "646-555-0128", email: "ava.thompson@mail.com" },
  { id: 5, name: "Liam Brooks", phone: "415-555-0182", email: "liam.brooks@outlook.com" },
];

const Userlist = () => {
  const [customers, setCustomers] = useState(initialCustomers);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Add Customer");

  const openModal = (title = "Add Customer") => {
    setModalTitle(title);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    setCustomers((prevCustomers) => prevCustomers.filter((customer) => customer.id !== id));
  };

  const filteredCustomers = customers.filter((customer) => {
    const term = searchTerm.toLowerCase();
    return (
      customer.name.toLowerCase().includes(term) ||
      customer.phone.toLowerCase().includes(term) ||
      customer.email.toLowerCase().includes(term)
    );
  });

  return (
    <>
      <div className="cd-topbar">
        <button className="cd-select" type="button">
          ALL CUSTOMER <span className="ms-2">▾</span>
        </button>
        <input
          className="cd-search"
          placeholder="🔍   Search customer"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="cd-add-link bg-danger" type="button" onClick={() => openModal("Add Customer")}>+ ADD CUSTOMER</button>
        <span className="cd-bell">🔔</span>
      </div>

      <div className="cd-shell">
        <div className="cd-card">
          <div className="d-flex align-items-center justify-content-between">
            <h1 className="cd-title">Customer</h1>
          </div>

          <table className="cd-table">
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
              {filteredCustomers.map((customer) => (
                <tr key={customer.id}>
                  <td className="cd-name">{customer.name}</td>
                  <td>{customer.phone}</td>
                  <td>{customer.email}</td>
                  <td className="text-end">
                    <button className="cd-action" type="button" onClick={() => openModal("Edit Customer")}>✎Edit</button>
                    <button className="cd-action" type="button" onClick={() => handleDelete(customer.id)}>🗑Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Usermodal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={modalTitle} />
    </>
  );
};

export default Userlist;
