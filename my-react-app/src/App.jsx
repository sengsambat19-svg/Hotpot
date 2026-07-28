import Sidebar from "./assets/Sidebar";
import Order from "./assets/Order";
import Checklist from "./assets/Checklist";
import Delivery from "./assets/Delivery";
import Summary from "./assets/Summary";
import ProductTable from "./assets/Product-table";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useSide } from "./ContextSidebar";
import Dashboard from "./assets/Dashboard";
import Userlist from "./assets/Userlist";
import MenuManagement from "./assets/Menu-management";
const App = () => {
  const [tab] = useSide();
  return (
    <div className="app">
      <Sidebar />
      <main className="content px-4 pb-5 w-100">
        {tab === 0 && <Order />}
        {tab === 1 && <MenuManagement />}
        {tab === 2 && <Dashboard />}
        {tab === 3 && <Userlist />}
        {tab === 4 && <ProductTable />}
      </main>
    </div>
  );
};
export default App;
