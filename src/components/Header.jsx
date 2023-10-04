import logo from "../assets/Images/logo.png";

const Header = () => {
  return (
    <div className="flex flex-row w-screen bg-black">
      <div className="w-28 p-2">
        <img src={logo} alt="Logo Paola Luna" className=" pl-10" />
      </div>
      <nav className="w-full flex items-center justify-end">
        <div>
          <ul className="flex flex-row gap-10 p-2 pr-40 text-white font-mono uppercase text-xl cursor-pointer">
            <li>Home</li>
            <li>About Me</li>
            <li>Projects</li>
            <li>Skills</li>
            <li>Contact</li>
            <li>Prueba</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
