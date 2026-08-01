import "./Modal.css";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      <div
        className="modal show"
        id="addItemModal"
        tabIndex="-1"
        aria-labelledby="addItemModalLabel"
        aria-hidden="false"
      >
        <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: "520px" }}>
          <div className="modal-content">
            <div className="modal-header">
              <div className="brand-icon">
                <i className="bi bi-plus-lg"></i>
              </div>
              <h5 className="modal-title" id="addItemModalLabel">Add New Item</h5>
              <button
                type="button"
                className="btn-close ms-auto"
                onClick={onClose}
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <div className="upload-area mb-3">
                <div className="upload-icon">
                  <i className="bi bi-cloud-upload"></i>
                </div>
                <div className="upload-title">Upload Item Photo</div>
                <div className="upload-hint">
                  Drag and drop or click to browse. Max 5MB, JPG/PNG only.
                </div>
              </div>

              <form>
                <div className="row g-3 mb-3">
                  <div className="col-6">
                    <label className="form-label">Item Name</label>
                    <input type="text" className="form-control" placeholder="e.g. Premium Lamb Slices" />
                  </div>
                  <div className="col-6">
                    <label className="form-label">SKU Number</label>
                    <input type="text" className="form-control" placeholder="VH-MT-001" />
                  </div>
                </div>

                <div className="row g-3 mb-3">
                  <div className="col-6">
                    <label className="form-label">Category</label>
                    <select className="form-select" defaultValue="">
                      <option value="" disabled>Select Category</option>
                      <option>Meat</option>
                      <option>Seafood</option>
                      <option>Vegetables</option>
                      <option>Noodles</option>
                      <option>Broth</option>
                      <option>Dipping Sauces</option>
                    </select>
                  </div>
                  <div className="col-6">
                    <label className="form-label">Base Price ($)</label>
                    <div className="price-input">
                      <span className="price-symbol">$</span>
                      <input type="text" className="form-control" placeholder="0.00" />
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Availability Status</label>
                  <div className="status-toggle">
                    <button type="button" className="status-btn active">Active</button>
                    <button type="button" className="status-btn">Out of Stock</button>
                  </div>
                </div>

                <div className="mb-1">
                  <label className="form-label">Item Description</label>
                  <textarea
                    className="form-control"
                    placeholder="Describe the origin, marbling, or flavor profile of this hotpot ingredient..."
                  ></textarea>
                </div>
              </form>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn-discard" onClick={onClose}>
                Discard Draft
              </button>
              <button type="button" className="btn-add" onClick={onClose}>
                <i className="bi bi-save"></i>
                Add to Menu
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="modal-backdrop show" onClick={onClose}></div>
    </>
  );
};

export default Modal;
