import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="w-[1240px] mx-auto flex items-center justify-between px-7 py-5">
      <div>
        <img src={logo} alt="" />
      </div>
      <div>
        <ul className="flex items-center justify-between gap-9">
          <Link to="/">
            <a href="">Home</a>
          </Link>
          <li>
            <a href="">About us</a>
          </li>
          <li>
            <a href="">Features</a>
          </li>
          <li>
            <a href="">Solution</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
