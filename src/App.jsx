import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./Shared/Navbar";
import Footer from "./Shared/Footer";

function App() {
  return (
    <div className=" bg-[#00040F] text-white mx-auto">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
