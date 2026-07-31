import "./usermodal.css"

const Usermodal = ({ isOpen, onClose, title = "Add Customer" }) => {
  if (!isOpen) return null

  return (
    <>
      <div className="cd-modal-overlay" onClick={onClose}>
        <div className="cd-modal" onClick={(e) => e.stopPropagation()}>
          <div className="cd-modal-header">
            <h3>{title}</h3>
            <button className="cd-modal-close" type="button" onClick={onClose}>
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
            <button className="cd-btn-cancel" type="button" onClick={onClose}>
              Cancel
            </button>
            <button className="cd-btn-save" type="button">
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Usermodal