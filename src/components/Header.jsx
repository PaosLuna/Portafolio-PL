import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Images/logo.png";
import "./header.css";

const Header = () => {
  const location = useLocation(); //es un hook que permite acceder a la información de la ubicación actual
  const currentPath = location.pathname; //esto da la parte de la URL que representa la ruta de la página actual

  function buttonActive(buttonPath) {
    //con esta función evaluamos que sean iguales
    return currentPath === buttonPath;
  }

  return (
    <div className="flex flex-row w-screen bg-black">
      <div className="w-28 p-2">
        <img src={logo} alt="Logo Paola Luna" className=" pl-10" />
      </div>
      <nav className="w-full flex items-center justify-end">
        <div>
          <ul className="flex flex-row gap-10 p-2 pr-20 text-white font-mono uppercase text-xl cursor-pointer">
            <Link to="/">HOME</Link>
            <Link
              to="/about-me"
              className={`boton ${buttonActive("/about-me") ? "active" : ""} `}
            >
              About me
            </Link>
            <Link
              to="/projects"
              className={`boton ${buttonActive("/projects") ? "active" : ""}`}
            >
              projects
            </Link>
            <Link
              to="/skills"
              className={`boton ${buttonActive("/skills") ? "active" : ""}`}
            >
              skills
            </Link>
            <Link
              to="/contact"
              className={`boton ${buttonActive("/contact") ? "active" : ""}`}
            >
              contact
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
