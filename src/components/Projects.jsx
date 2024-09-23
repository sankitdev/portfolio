import ProjectCards from "./ProjectCards";
import { projects } from "../PortfolioData";
const Project = () => {
  return (
    <div id="projects">
      <h1 className="text-center text-4xl text-primary font-semibold">
        PROJECTS
      </h1>
      <div className="flex justify-center items-center flex-wrap mt-2">
        {projects.map((items) => (
          <ProjectCards
            key={items.name}
            name={items.name}
            image={items.image}
            techStack={items.stack}
            description={items.description}
            github={items.sourceCode}
          />
        ))}
      </div>
    </div>
  );
};
export default Project;
