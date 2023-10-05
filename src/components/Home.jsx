import logo from "../assets/Images/logo.png";
import FunButton from "./ButtonActive";

const Home = () => {
  return (
    <div className="bg-black text-white w-screen p-10 h-screen flex flex-row gap-5">
      <div className="w-[55%] flex items-center justify-center">
        <img src={logo} alt="logo Paola Luna" className="w-[75%]" />
      </div>
      <div className="w-[45%] flex flex-col justify-center items-center gap-10 pr-10">
        <h1 className="font-custom text-5xl tracking-[10px] font-bold text-[#22D6F6]">
          ¡HOLA!
        </h1>
        <p className="text-justify font-mono text-xl">
          Soy una Front-End Developer recién salida del empaque, mi viaje en el
          mundo del desarrollo web ha comenzado con entusiasmo y determinación.
          Disfruto de convertir ideas en código y ver cómo cobran vida en el
          navegador. Siempre estoy ansiosa por aprender y crecer en este
          emocionante mundo.
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
