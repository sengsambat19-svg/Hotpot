import Sidebar from "./assets/Sidebar";
import Order from "./assets/Order";
import Checklist from "./assets/Checklist";
import Delivery from "./assets/Delivery";
import Summary from "./assets/Summary";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useSide } from "./ContextSidebar";

const App = () => {
  const [tab] = useSide();
  return (
    <div className="app">
      <Sidebar />
      {tab === 0 ? (
        <Order />
      ) : (
        <div className="content px-4 pb-5">
          <div className="row g-4">
            <div className="col-12 col-xl-8">
              <Checklist />
            </div>
            <div className="col-12 col-xl-4 d-flex flex-column gap-4">
              <Delivery />
              <Summary />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
