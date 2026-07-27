import Sidebar from "./assets/Sidebar";
import Order from "./assets/Order";
import Checklist from "./assets/Checklist";
import Delivery from "./assets/Delivery";
import Summary from "./assets/Summary";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useSide } from "./ContextSidebar";
import Dashboard from "./assets/Dashboard";
import Userlist from "./assets/Userlist";
const App = () => {
  const [tab] = useSide();
  return (
    <>
    <div className="app">
      <Sidebar />
      {tab === 0 && (
        <Order />
      ) 
      } {tab===1 && (
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
       {tab === 2 && (
  <div className="content px-4 pb-5 w-100">
    <Dashboard />
  </div>
)}
  {tab === 3 && (
    <div className="content px-4 pb-5 w-100">
      <Userlist />
    </div>
  )}
    </div>

    
  </>
)
};
export default App;
