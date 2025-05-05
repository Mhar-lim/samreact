const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Southcom National High School Information Management System",
      description: "A comprehensive information management system designed for Southcom National High School to streamline administrative processes, manage student records, track academic performance, and facilitate communication between teachers, students, and parents.",
      image: "/halon.jpeg",
      github: "https://github.com/username/snhs-ims",
      demo: "https://snhssims.online"
    }
  ]

  return (
    <div className="projects-container">
      <div className="section-header">
        <h2 className="glitch-text" data-text="Projects.exe">Projects.exe</h2>
        <div className="tech-line"></div>
      </div>

      <div className="projects-grid">
        {projects.map(project => (
          <div className="project-card" key={project.id}>
            <div className="project-image">
              <div className="image-frame">
                <img src={project.image} alt={project.title} />
                <div className="frame-corner top-left"></div>
                <div className="frame-corner top-right"></div>
                <div className="frame-corner bottom-left"></div>
                <div className="frame-corner bottom-right"></div>
              </div>
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link github">
                  <i className="devicon-github-original"></i> GitHub
                </a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link demo">
                  <i className="fa fa-external-link"></i> Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
