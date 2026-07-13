import "./style/delivery.css"

const Delivery = () => {
  return (
    <div className="row g-4">
     <div className="col-12 col-xl-4">
          <div className="card-soft p-4 mb-4">
            <h5 className="fw-bold mb-3">Delivery Details</h5>
            <div className="d-flex gap-3 mb-3">
              <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: "42px", height: "42px", background: "var(--brand-soft)", color: "var(--brand)" }}>
                <i className="bi bi-geo-alt-fill"></i>
              </div>
              <div>
                <div className="fw-bold">4521 Oak Street, Apt 4B</div>
                <div className="text-muted small">San Francisco, CA 94107</div>
                <div className="gated">Gated Community • Code 8152</div>
              </div>
            </div>
            <div className="map mb-3"><i className="bi bi-geo-alt-fill"></i></div>
            <div className="courier">
              <div className="d-flex justify-content-between mb-2">
                <small className="text-muted">Courier Status</small>
                <small className="assigned">Assigned</small>
              </div>
              <div className="d-flex align-items-center gap-2">
                <img className="avatar" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=70" alt=""/>
                <div className="flex-grow-1">
                  <div className="fw-bold">Jason M.</div>
                  <div className="text-muted small">Est. Arrival: 14 mins after pickup</div>
                </div>
                <button className="icon-btn"><i className="bi bi-chat-dots"></i></button>
              </div>
            </div>
          </div>

          <div className="summary">
            <h5 className="fw-bold mb-3">Summary</h5>
            <div className="row-line"><span>Subtotal</span><span className="text-white">$64.50</span></div>
            <div className="row-line"><span>Delivery Fee</span><span className="free">FREE</span></div>
            <div className="row-line"><span>Taxes</span><span className="text-white">$5.48</span></div>
            <div className="total"><span>Total Amount</span><span className="amt">$69.98</span></div>
            <div className="pay">
              <div className="ico"><i className="bi bi-apple text-white"></i></div>
              <div>
                <small>PAYMENT METHOD</small>
                <div className="fw-bold">Apple Pay (•••• 2081)</div>
              </div>
            </div>
          </div>

          <div className="footer-cta mt-4">
            <button className="btn btn-brand w-100 py-3"><i className="bi bi-check-circle me-2"></i>Mark as Ready</button>
          </div>
        </div>
        </div>
  )
}

export default Delivery
