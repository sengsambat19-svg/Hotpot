import { useEffect, useState } from "react";
import axios from "axios";
import UserModal from "../UserModal/UserModal";
import "./UserList.css";

const API = import.meta.env.VITE_API_URL || "http://localhost:8000";

const UserList = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    axios.get(`${API}/Admin/User`)
      .then((r) => setCustomers(r.data.data || []))
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  const remove = async (id) => {
    if (!confirm("Delete this user?")) return;
    await axios.delete(`${API}/Admin/User/${id}`);
    setCustomers((prev) => prev.filter((c) => c.id !== id));
  };

  if (loading) return <div className="page page-users"><div className="card ul-card">Loading…</div></div>;
  if (error) return <div className="page page-users"><div className="card ul-card text-danger">{error}</div></div>;

  return (
    <div className="page page-users">
      <div className="card ul-card">
        <div className="d-flex align-items-center justify-content-between mb-4">
          <h1 className="ul-title mb-0">Customer</h1>
          <button type="button" className="btn-brand" onClick={() => setOpen(true)}>
            <i className="bi bi-plus-lg me-1"></i> ADD CUSTOMER
          </button>
        </div>
        <table className="ul-table">
          <thead>
            <tr><th>NAME</th><th>PHONE</th><th>EMAIL</th><th className="text-end">ACTION</th></tr>
          </thead>
          <tbody>
            {customers.map((c) => (
              <tr key={c.id}>
                <td className="ul-name">{c.name}</td>
                <td>{c.Phone}</td>
                <td>{c.email}</td>
                <td className="text-end">
                  <button type="button" className="ul-action danger" onClick={() => remove(c.id)}>
                    <i className="bi bi-trash"></i> Delete
                  </button>
                </td>
              </tr>
            ))}
            {customers.length === 0 && (
              <tr><td colSpan="4" className="text-center text-muted py-4">No customers yet.</td></tr>
            )}
          </tbody>
        </table>
      </div>

      <UserModal isOpen={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export default UserList;