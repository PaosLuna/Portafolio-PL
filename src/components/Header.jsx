import { Link } from "react-router-dom";
import logo from "../assets/Images/logo.png";

const Header = () => {
  return (
    <div className="flex flex-row w-screen bg-black">
      <div className="w-28 p-2">
        <img src={logo} alt="Logo Paola Luna" className=" pl-10" />
      </div>
      <nav className="w-full flex items-center justify-end">
        <div>
          <ul className="flex flex-row gap-10 p-2 pr-20 text-white font-mono uppercase text-xl cursor-pointer">
            <Link to="/">HOME</Link>
            <Link to="/about-me">About me</Link>
            <Link to="/projects">projects</Link>
            <Link to="/skills">skills</Link>
            <Link to="/contact">contact</Link>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
