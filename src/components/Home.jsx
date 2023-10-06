import logo from "../assets/Images/logo.png";
import hola from "../assets/Images/hola.png";
import { FunButton } from "./ButtonActive";

const Home = () => {
  return (
    <div className="bg-black text-white w-screen min-h-screen p-10 lg:flex lg:flex-row lg:gap-5">
      <div className="flex items-center justify-center w-[100%] md:w-[100%] lg:w-[50%]">
        <img
          src={logo}
          alt="logo Paola Luna"
          className="w-[90%] md:w-[60%] lg:w-[85%]"
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-10 pt-5 w-[100%] md:w-[100%] lg:w-[60%] lg:pr-10">
        <img
          src={hola}
          alt="¡HOLA!"
          className="w-[70%] md:w-[50%] md:mt-10 lg:w-[60%]"
        />
        <p className="text-justify font-mono text-xl md:pl-10 md:pr-10 md:text-2xl lg:text-xl">
          Soy una Front-End Developer recién salida del empaque, disfruto de
          convertir ideas en código y ver cómo cobran vida en el navegador.
          Siempre estoy ansiosa por aprender y crecer en este emocionante mundo.
        </p>
        <p className="font-mono text-xl text-center md:text-2xl lg:text-xl lg:text-justify ">
          ¡Vamos a crear cosas asombrosas juntos! 🚀
        </p>
        <FunButton />
      </div>
    </div>
  );
};

export default Home;
