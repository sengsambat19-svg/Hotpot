import "./style/odprogress.css"

const Odprogress = () => {
  return (
    <div className="card-soft p-4 mb-4">
        <div className="steps">
          <div className="step done">
            <div className="circle"><i className="bi bi-check-lg"></i></div>
            <div className="step-line"></div>
            <div className="label">Received</div>
          </div>
          <div className="step current">
            <div className="circle"><i className="bi bi-fire"></i></div>
            <div className="step-line"></div>
            <div className="label">Preparing</div>
          </div>
          <div className="step">
            <div className="circle"><i className="bi bi-box-seam"></i></div>
            <div className="step-line"></div>
            <div className="label">Ready</div>
          </div>
          <div className="step">
            <div className="circle"><i className="bi bi-truck"></i></div>
            <div className="label">Out for Delivery</div>
          </div>
        </div>
      </div>
      

  )
}

export default Odprogress