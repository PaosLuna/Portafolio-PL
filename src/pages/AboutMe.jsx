import Header from "../components/Header";
import fotoCard from "../assets/Images/fotoPao.png";
import contexto from "../assets/Images/contexto.png";

const AboutMe = () => {
  return (
    <div>
      <div className="bg-black min-h-screen max-w-screen">
        <Header />
        <div className="p-3 flex flex-col items-center lg:flex lg:flex-row lg:p-10">
          <div className="p-2 w-[100%] lg:w-[40%] flex justify-center">
            <img
              src={fotoCard}
              alt="foto"
              className="w-[240px] md:w-[300px] lg:w-[340px] h-auto"
            />
          </div>
          <div className="flex flex-col justify-center items-center w-[90%] mt-5 md:mt-10 lg:w-[65%]">
            <img
              src={contexto}
              alt="titulo"
              className="w-[280px] md:w-[400px] lg:w-[500px]"
            />
            <p className="text-white font-mono text-xl text-justify p-5 md:mt-8 lg:mt-5 lg:w-[90%] lg:p-10">
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
