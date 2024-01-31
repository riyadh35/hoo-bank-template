import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./Shared/Navbar";
import Banner from "./Component/Banner";

function App() {
  return (
    <div className="w-[1440px] bg-[#00040F] text-white mx-auto">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
