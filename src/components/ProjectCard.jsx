function ProjectCard({ project }) {
  return (
    <div className={`card project${project.id}`}>
      <img
        src={project.image}
        alt={project.title}
        className="cardImage"
        loading="lazy"
      />
      <div className="cardContent">
        <h3 className="cardTitle">{project.title}</h3>
        <p className="cardDescription">{project.description}</p>
        <p className="cardTech">
          Technologies: {project.technologies.join(", ")}
        </p>
        <ul className="featureList">
          {project.features.map((feature, index) => (
            <li key={index} className="featureItem">
              {feature.emoji} {feature.text}
            </li>
          ))}
        </ul>
        <div className="buttons">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              Live Project ↗️
            </a>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            GitHub Repo ↗️
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
