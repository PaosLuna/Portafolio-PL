import Header from "../components/Header";
import proyectos from "../assets/Images/proyectos.png";
import { misProyectos } from "../Data/gitProjects";
import "./projects.css";
import { VisitButton } from "../components/ButtonActive";

const Projects = () => {
  return (
    <div className="flex flex-col bg-black pb-10 max-w-full">
      <Header />
      <div className="flex justify-center">
        <img
          src={proyectos}
          alt="Mis proyectos"
          className="h-auto w-[70%] lg:w-[40%] mt-10"
        />
      </div>
      <div className="flex flex-wrap gap-10 max-w-full justify-center mt-8">
        {misProyectos.map((proyecto) => (
          <div key={proyecto.id}>
            <div className="tarjetaProyecto">
              <div className="cardCompleta">
                <div className="tarjetaFrente">
                  <div className="bg"></div>
                  <div className="body_tarjetaFrente">
                    <img
                      className="imagenTarjeta"
                      src={proyecto.image}
                      alt={proyecto.name}
                    />
                    <h4 className="titulotarjetas">{proyecto.name}</h4>
                  </div>
                </div>
                <div className="tarjetaAtras">
                  <div className="body_tarjetaAtras">
                    <p className="textotarjeta">{proyecto.description}</p>{" "}
                    <br />
                    <p className="textotarjeta">{proyecto.technologies}</p>
                    <div className="div-button-visit">
                      <a
                        href={proyecto.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <VisitButton />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
