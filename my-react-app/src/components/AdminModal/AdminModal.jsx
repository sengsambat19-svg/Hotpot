import { useState } from "react";
import "./AdminModal.css";

const AdminModal = ({ isOpen, onClose, onSubmit }) => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [busy, setBusy] = useState(false);
  if (!isOpen) return null;

  const send = async (e) => {
    e.preventDefault();
    setBusy(true);
    try { await onSubmit(form); setForm({ name: "", email: "", password: "" }); }
    finally { setBusy(false); }
  };

  return (
    <div className="um-overlay" onClick={onClose}>
      <form className="um-modal" onClick={(e) => e.stopPropagation()} onSubmit={send}>
        <div className="um-header">
          <h3>Add Admin</h3>
          <button type="button" className="um-close" onClick={onClose}><i className="bi bi-x-lg"></i></button>
        </div>
        <div className="um-body">
          <label>Name<input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></label>
          <label>Email<input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /></label>
          <label>Password<input type="password" required minLength={8} value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} /></label>
        </div>
        <div className="um-footer">
          <button type="button" className="um-btn-cancel" onClick={onClose}>Cancel</button>
          <button type="submit" className="um-btn-save" disabled={busy}>{busy ? "Saving…" : "Save"}</button>
        </div>
      </form>
    </div>
  );
};

export default AdminModal;
