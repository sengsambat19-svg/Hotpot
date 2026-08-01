import "./Topbar.css";

const Topbar = () => {
  return (
    <header className="topbar">
      <div className="topbar-left">
        <h1 className="topbar-title">Admin Portal</h1>
        <span className="pill-open">
          <span className="dot"></span>Store Open
        </span>
      </div>

      <div className="search-wrap">
        <i className="bi bi-search"></i>
        <input className="search" placeholder="Search..." />
      </div>

      <div className="topbar-right">
        <button type="button" className="icon-btn" aria-label="Notifications">
          <i className="bi bi-bell"></i>
          <span className="dot-red"></span>
        </button>
        <span className="avatar">
          <i className="bi bi-person"></i>
        </span>
        <span className="role">Branch Manager</span>
      </div>
    </header>
  );
};

export default Topbar;
