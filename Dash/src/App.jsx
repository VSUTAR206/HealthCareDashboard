import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./componenets/navbar";
import Sidebar from "./componenets/sidebar";
import DashBoard from "./componenets/dashboard";

function App() {
  return (
    <div className="">
      <Navbar />
      <div className="row d-flex justify-content-center align-item-center">
        <Sidebar />
        <DashBoard />
      </div>
    </div>
  );
}

export default App;
