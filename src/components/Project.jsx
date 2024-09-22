import ProjectCards from "./ProjectCards";
import { projects } from "../PortfolioData";
const Project = () => {
  const [{ name, description }] = projects;
  return (
    <>
      <h1 className="text-center text-4xl font-semibold">PROJECTS</h1>
      <div className="flex justify-center items-center flex-wrap">
        <ProjectCards name={name} description={description} />
        <ProjectCards name={name} description={description} />
        <ProjectCards name={name} description={description} />
      </div>
    </>
  );
};
export default Project;
