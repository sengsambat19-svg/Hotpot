import './style/summary.css'
function Summary() {
  return (
    <div className="summary">
      <h5 className="fw-bold mb-3">Summary</h5>
      <div className="row-line">
        <span>Subtotal</span>
        <span className="text-white">$64.50</span>
      </div>
      <div className="row-line">
        <span>Delivery Fee</span>
        <span className="free">FREE</span>
      </div>
      <div className="row-line">
        <span>Taxes</span>
        <span className="text-white">$5.48</span>
      </div>
      <div className="total">
        <span>Total Amount</span>
        <span className="amt">$69.98</span>
      </div>
      <div className="pay">
        <div className="ico">
          <i className="bi bi-apple text-white"></i>
        </div>
        <div>
          <small>PAYMENT METHOD</small>
          <div className="fw-bold">Apple Pay (•••• 2081)</div>
        </div>
      </div>
      <div className="footer-cta mt-4">
        <button className="btn btn-brand w-100 py-3">
          <i className="bi bi-check-circle me-2"></i>Mark as Ready
        </button>
      </div>
    </div>
  );
}

export default Summary;