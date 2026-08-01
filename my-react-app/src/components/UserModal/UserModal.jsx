import "./UserModal.css";

const UserModal = ({ isOpen, onClose, title = "Add Customer" }) => {
  if (!isOpen) return null;

  return (
    <div className="um-overlay" onClick={onClose}>
      <div className="um-modal" onClick={(e) => e.stopPropagation()}>
        <div className="um-header">
          <h3>{title}</h3>
          <button type="button" className="um-close" onClick={onClose} aria-label="Close">
            <i className="bi bi-x-lg"></i>
          </button>
        </div>

        <div className="um-body">
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

        <div className="um-footer">
          <button type="button" className="um-btn-cancel" onClick={onClose}>Cancel</button>
          <button type="button" className="um-btn-save">Save</button>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
