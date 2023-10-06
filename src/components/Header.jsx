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
    <div className="flex flex-row max-w-full bg-black">
      <div className="p-2 w-20 lg:w-28 ">
        <img
          src={logo}
          alt="Logo Paola Luna"
          className="w-[100%] ml-2 mt-2 md:ml-10 md:mt-2 lg:pl-10 "
        />
      </div>
      <nav className="w-full flex items-center justify-center md:justify-end">
        <div>
          <ul className="flex flex-row text-white font-mono uppercase text-sm md:text-xl gap-2 md:gap-10 p-2 md:pr-20  cursor-pointer ">
            <Link to="/" className="hover:text-[#f6229b]">
              HOME
            </Link>
            <Link
              to="/about-me"
              className={`boton ${
                buttonActive("/about-me") ? "active" : ""
              } hover:text-[#f6229b]`}
            >
              About me
            </Link>
            <Link
              to="/projects"
              className={`boton ${
                buttonActive("/projects") ? "active" : ""
              } hover:text-[#f6229b]`}
            >
              projects
            </Link>
            <Link
              to="/skills"
              className={`boton ${
                buttonActive("/skills") ? "active" : ""
              } hover:text-[#f6229b]`}
            >
              skills
            </Link>
            <Link
              to="/contact"
              className={`boton ${
                buttonActive("/contact") ? "active" : ""
              } hover:text-[#f6229b]`}
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
