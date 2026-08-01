import { useEffect, useState } from "react";
import axios from "axios";
import AdminModal from "../AdminModal/AdminModal";
import "./AdminList.css";

const API = import.meta.env.VITE_API_URL || "http://localhost:8000";

let token = null;
async function login() {
  const { data } = await axios.post(`${API}/Admin`, { email: "admin@redpot.io", password: "password" });
  token = data.token;
}
axios.interceptors.request.use((c) => {
  if (token) c.headers.Authorization = `Bearer ${token}`;
  return c;
});

const AdminList = () => {
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);

  const load = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(`${API}/Admin/List`);
      setAdmins(data.data || []);
    } catch (e) { setError(e.message); }
    finally { setLoading(false); }
  };

  useEffect(() => { (async () => { await login(); await load(); })(); }, []);

  const add = async (payload) => {
    await axios.post(`${API}/Admin/Add`, payload);
    setOpen(false);
    load();
  };

  const remove = async (id) => {
    if (!confirm("Delete this admin?")) return;
    await axios.delete(`${API}/Admin/${id}`);
    setAdmins((prev) => prev.filter((a) => a.id !== id));
  };

  if (loading) return <div className="page page-users"><div className="card ul-card">Loading…</div></div>;
  if (error) return <div className="page page-users"><div className="card ul-card text-danger">{error}</div></div>;

  return (
    <div className="page page-users">
      <div className="ul-topbar">
        <button type="button" className="ul-select">ALL ADMINS <span className="ms-2">▾</span></button>
        <button type="button" className="btn-brand ms-auto" onClick={() => setOpen(true)}>
          <i className="bi bi-plus-lg me-1"></i> ADD ADMIN
        </button>
      </div>

      <div className="card ul-card">
        <h1 className="ul-title">Admin</h1>
        <table className="ul-table">
          <thead>
            <tr><th>NAME</th><th>EMAIL</th><th className="text-end">ACTION</th></tr>
          </thead>
          <tbody>
            {admins.map((a) => (
              <tr key={a.id}>
                <td className="ul-name">{a.name}</td>
                <td>{a.email}</td>
                <td className="text-end">
                  <button type="button" className="ul-action danger" onClick={() => remove(a.id)}>
                    <i className="bi bi-trash"></i> Delete
                  </button>
                </td>
              </tr>
            ))}
            {admins.length === 0 && (
              <tr><td colSpan="3" className="text-center text-muted py-4">No admins yet.</td></tr>
            )}
          </tbody>
        </table>
      </div>

      <AdminModal isOpen={open} onClose={() => setOpen(false)} onSubmit={add} />
    </div>
  );
};

export default AdminList;