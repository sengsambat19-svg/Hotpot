import Sidebar from "./components/Sidebar/Sidebar";
import Order from "./components/Order/Order";
import MenuManagement from "./components/MenuManagement/MenuManagement";
import Dashboard from "./components/Dashboard/Dashboard";
import UserList from "./components/UserList/UserList";
import ProductTable from "./components/ProductTable/ProductTable";
import AdminList from "./components/AdminList/AdminList";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./index.css";

import { useSide } from "./context/SidebarContext";

const App = () => {
  const { tab } = useSide();

  return (
    <div className="app">
      <Sidebar />
      <main className="content">
        {tab === 0 && <Order />}
        {tab === 1 && <MenuManagement />}
        {tab === 2 && <Dashboard />}
        {tab === 3 && <UserList />}
        {tab === 4 && <ProductTable />}
        {tab === 5 && <AdminList />}
      </main>
    </div>
  );
};

export default App;
