import "./style/checklist.css"

const Checklist = () => {
  return (
    <div className="card-soft p-4 h-100">
      <div className="d-flex align-items-center justify-content-between mb-2">
        <div className="d-flex align-items-center gap-2">
          <i className="bi bi-archive text-danger fs-5"></i>
          <h5 className="mb-0 fw-bold">Packing Checklist</h5>
        </div>
        <span className="items-total">8 Items Total</span>
      </div>

      <div className="item">
        <span className="check"></span>
        <div className="flex-grow-1">
          <div className="fw-bold">2x Prime Ribeye</div>
          <div className="text-muted small">Thinly sliced, premium grade, chilled container</div>
        </div>
        <span className="tag tag-protein">Proteins</span>
        <img className="item-thumb" src="https://images.unsplash.com/photo-1558030006-450675393462?w=200&q=70" alt="" />
      </div>

      <div className="item">
        <span className="check checked"><i className="bi bi-check-lg"></i></span>
        <div className="flex-grow-1">
          <div className="fw-bold strike">1x Spicy Sichuan Base</div>
          <div className="small strike">House special chili oil & peppercorn blend</div>
        </div>
        <span className="tag tag-spicy">Spicy</span>
        <img className="item-thumb" src="https://images.unsplash.com/photo-1552611052-33e04de081de?w=200&q=70" alt="" />
      </div>

      <div className="item">
        <span className="check"></span>
        <div className="flex-grow-1">
          <div className="fw-bold">1x Enoki Mushrooms</div>
          <div className="text-muted small">Fresh cluster, trimmed and cleaned</div>
        </div>
        <span className="tag tag-veg">Vegetables</span>
        <img className="item-thumb" src="https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=200&q=70" alt="" />
      </div>

      <div className="item">
        <span className="check"></span>
        <div className="flex-grow-1">
          <div className="fw-bold">1x Handmade Spinach Noodles</div>
          <div className="text-muted small">Freshly pulled green spinach-infused wheat noodles</div>
        </div>
        <span className="tag tag-vegan">Vegan</span>
        <img className="item-thumb" src="https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=200&q=70" alt="" />
      </div>

      <div className="note mt-3">
        <i className="bi bi-info-circle me-2"></i>
        Customer requested extra sesame sauce on the side.
      </div>
    </div>
  )
}

export default Checklist
