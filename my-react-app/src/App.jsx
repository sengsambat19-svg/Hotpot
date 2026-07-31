import Sidebar from "./assets/SideBar/Sidebar";
import Order from "./assets/SideBar/Order/Order";
import ProductTable from "./assets/SideBar/ProductTable/Product-table";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useSide } from "./ContextSidebar";
import Dashboard from "./assets/SideBar/Dashbaord/Dashboard";
import Userlist from "./assets/SideBar/UserList/Userlist";
import MenuManagement from "./assets/SideBar/MenuMangement/Menu-management";
const App = () => {
  const [tab] = useSide();
  return (
    <div className="app">
      <Sidebar />
      <main className="content px-4 pb-5 w-100">
        {tab === 2 && <Dashboard />}
        {tab === 0 && <Order />}
        {tab === 1 && <MenuManagement />}
        {tab === 3 && <Userlist />}
        {tab === 4 && <ProductTable />}
      </main>
    </div>
  );
};
export default App;
