const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "System Analyst",
      company: "Innoventure SE Group",
      duration: "2022 - Present",
      description: "Responsible for analyzing system requirements, designing software solutions, and collaborating with development teams to implement effective information systems. Conduct user interviews, create detailed documentation, and ensure that software solutions meet business needs and technical specifications.",
      technologies: ["Requirements Analysis", "UML", "System Design", "Documentation", "User Testing"]
    },
    {
      id: 2,
      role: "BSIT Student",
      company: "Western Mindanao State University (WMSU)",
      duration: "2020 - Present",
      description: "Pursuing a Bachelor of Science in Information Technology with focus on software development, database management, and system analysis. Actively participating in academic projects, technical workshops, and university-sponsored technology events to enhance practical skills and theoretical knowledge.",
      technologies: ["Programming", "Database Management", "Web Development", "Networking", "System Analysis"]
    }
  ]

  return (
    <div className="experience-container">
      <div className="section-header">
        <h2 className="glitch-text" data-text="Work_Experience.exe">Work_Experience.exe</h2>
        <div className="tech-line"></div>
      </div>

      <div className="experience-timeline">
        {experiences.map(exp => (
          <div className="experience-card" key={exp.id}>
            <div className="experience-header">
              <h3 className="experience-role">{exp.role}</h3>
              <div className="experience-company">{exp.company}</div>
              <div className="experience-duration">{exp.duration}</div>
            </div>
            <div className="experience-body">
              <p>{exp.description}</p>
            </div>
            <div className="experience-footer">
              <div className="tech-tags">
                {exp.technologies.map((tech, index) => (
                  <span className="tech-tag" key={index}>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience
