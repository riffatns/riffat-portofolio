import ProjectCard from "./ProjectCard";
import { projects } from "../data/projectsData";

function Projects() {
  return (
    <section className="section">
      <h2 className="sectionTitle" id="projects" tabIndex={-1}>
        Projects
      </h2>
      <div className="projectGrid">
        {projects.filter(project => !project.hidden).map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
