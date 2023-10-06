import { frontendSkills } from "../Data/skillsTech";
import Header from "../components/Header";

const Skills = () => {
  return (
    <div className="flex flex-col bg-black min-h-screen w-screen pb-5">
      <Header />
      <div className="flex justify-center mt-2 md:mt-20">
        <div className="flex flex-col justify-center items-center rounded-lg bg-[#7f95e4d5] w-[75%] mt-5">
          <h1 className="text-black uppercase text-3xl font-mono font-extrabold pt-5">
            Tech skills
          </h1>
          <div className="flex flex-wrap gap-4 justify-center p-5">
            {frontendSkills.map((skill, index) => (
              <div
                key={index}
                className="p-2 border border-black bg-black rounded-md w-40 h-20 flex items-center gap-2 justify-center"
              >
                <img
                  src={skill.icon}
                  alt={`${skill.name} icon`}
                  className="w-7 h-7"
                />
                <span className="text-lg font-mono font-bold text-white">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
