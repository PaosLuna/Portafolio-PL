import FormEmail from "../components/FormEmail";
import Header from "../components/Header";

const Contact = () => {
  return (
    <div className="flex flex-col bg-black min-h-screen max-w-full text-white pb-4">
      <Header />
      <div className="flex flex-col items-center lg:flex lg:flex-row">
        <div className="flex flex-col gap-10 mt-5 lg:w-[30%] lg:ml-40 lg:mt-28 lg:gap-20">
          <a
            href="https://www.linkedin.com/in/paola-luna-frontend/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#7f95e4d5] w-60 h-20  rounded flex justify-between items-center p-5 transition-transform transform-origin-center hover:bg-[#F6D922] hover:scale-125 hover:text-black"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/1051/1051333.png"
              alt="Logo Linkedin"
              className="w-14 h-14 "
            />
            <button className="p-8 text-2xl font-extrabold font-mono">
              LINKEDIN
            </button>
          </a>
          <a
            href="https://github.com/PaosLuna"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#7f95e4d5] w-60 h-20  rounded flex justify-between items-center p-5 transition-transform transform-origin-center hover:bg-[#F6D922] hover:scale-125 hover:text-black"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt="Logo Linkedin"
              className="w-14 h-14 "
            />
            <button className="p-5 text-2xl font-extrabold font-mono">
              GITHUB
            </button>
          </a>
          <a
            href="https://drive.google.com/file/d/1JE0NgMQBXvS9_61l_6F_Z98izJwUwarJ/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#7f95e4d5] w-60 h-20  rounded flex justify-between items-center p-5 transition-transform transform-origin-center hover:bg-[#F6D922] hover:scale-125 hover:text-black"
          >
            <img
              src="https://images.vexels.com/media/users/3/140030/isolated/preview/521136d25b37386f49728b93d2e4e6fa-icono-de-cv.png"
              alt="Logo Linkedin"
              className="w-14 h-14 "
            />
            <button className="p-5 text-2xl font-extrabold font-mono">
              RESUME
            </button>
          </a>
        </div>
        <FormEmail />
      </div>
    </div>
  );
};

export default Contact;
