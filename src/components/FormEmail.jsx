import { useState } from "react";
import mail from "../assets/Images/mail.png";

const FormEmail = () => {
  const [textToCopy, setTextToCopy] = useState("Texto para copiar...");

  const handleCopyClick = () => {
    navigator.clipboard.writeText(textToCopy).then(() => {
      alert("Texto copiado al portapapeles.");
    });
  };

  return (
    <div>
      <div className="flex flex-col gap-10 mt-20 pr-20 items-center">
        <img
          src={mail}
          alt="Contactame"
          className="h-auto w-[70%] mt-10 mb-8"
        />
        <p className="font-mono text-2xl text-center w-[75%]">
          Estoy emocionada por la oportunidad de contribuir y aprender en tu
          equipo de desarrollo.
        </p>
      </div>
      <div className="flex justify-center pr-20 pt-20">
        <textarea
          rows="4"
          cols="50"
          value="lunapp20@gmail.com"
          onChange={(e) => setTextToCopy(e.target.value)}
          className="text-white w-72 max-h-12 bg-gray-800 flex text-center font-mono font-extrabold text-2xl pt-2"
        ></textarea>
        <button
          onClick={handleCopyClick}
          className="bg-gray-800 w-20 h-12 uppercase text-lg font-mono font-extrabold hover:bg-[#F6D922] hover:text-black"
        >
          Copiar
        </button>
      </div>
    </div>
  );
};

export default FormEmail;
