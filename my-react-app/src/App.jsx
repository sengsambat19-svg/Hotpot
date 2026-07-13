import Sidebar from "./assets/Sidebar";
import Order from "./assets/Order";
import OdSidebar from "./assets/OdSidebar";
import Odprogress from "./assets/Odprogress";
import Checklist from "./assets/Checklist";
import Delivery from "./assets/Delivery";






const App = () => {
  return (
    <>
    {/* <div className="app">
    <Sidebar />
     <Order />
  </div> */}
  <div className="app">
    <OdSidebar />
    <Odprogress />
    <Checklist />
    <Delivery />
  </div>
  </>

  )
}

export default App;