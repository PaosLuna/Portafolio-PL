import logo from "../assets/Images/logo.png";
import hola from "../assets/Images/hola.png";
import FunButton from "./ButtonActive";

const Home = () => {
  return (
    <div className="bg-black text-white w-screen p-10 h-screen flex flex-row gap-5">
      <div className="w-[50%] flex items-center justify-center">
        <img src={logo} alt="logo Paola Luna" className="w-[85%]" />
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center gap-10 pr-10">
        <img src={hola} alt="¡HOLA!" className="w-[60%]" />
        <p className="text-justify font-mono text-xl  pl-10 pr-10">
          Soy una Front-End Developer recién salida del empaque, disfruto de
          convertir ideas en código y ver cómo cobran vida en el navegador.
          Siempre estoy ansiosa por aprender y crecer en este emocionante mundo.
        </p>
        <p className="text-justify font-mono text-xl">
          ¡Vamos a crear cosas asombrosas juntos! 🚀
        </p>
        <FunButton />
      </div>
    </div>
  );
};

export default Home;
