import Header from "../components/Header";
import fotoCard from "../assets/Images/fotoPao.png";
import contexto from "../assets/Images/contexto.png";

const AboutMe = () => {
  return (
    <div>
      <div className="flex flex-col min-h-screen bg-black max-w-screen">
        <Header />
        <div className="flex p-10">
          <div className="w-[40%] p-2 flex justify-center">
            <img src={fotoCard} alt="foto" className="w-[340px] h-auto" />
          </div>
          <div className="w-[65%] flex flex-col justify-center items-center">
            <img src={contexto} alt="titulo" className="w-[500px]" />
            <p className="text-white font-mono text-xl text-justify mt-5 w-[90%] p-10">
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
