import Header from "../components/Header";
import fotoCard from "../assets/Images/fotoPao.png";
import contexto from "../assets/Images/contexto.png";

const AboutMe = () => {
  return (
    <div>
      <div className="flex flex-col bg-black h-screen w-screen">
        <Header />
        <div className="flex  p-5">
          <div className="w-[35%] p-10 flex justify-center">
            <img src={fotoCard} alt="foto" className="w-[390px] h-auto" />
          </div>
          <div className="w-[65%] flex flex-col justify-center items-center">
            <img src={contexto} alt="titulo" className="w-[600px] h-auto" />
            <p className="text-white font-mono text-xl text-justify mt-10 w-[90%] p-10">
              👩‍💻 Iniciando en el mundo IT, emocionada por aprender y mejorar
              cada día. <br />
              <br /> 🗣️ Con un background en Comunicación, me encanta encontrar
              formas creativas de transmitir mensajes y construir interfaces
              amigables. <br />
              <br />
              😄 Tengo un buen sentido del humor y creo que la risa es el mejor
              metodo para tener un buen día. <br />
              <br />
              🎵 Amante de la música, siempre encontrarás una playlist curada
              con cariño para inspirarme mientras desarrollo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
