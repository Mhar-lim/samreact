const About = () => {
    return (
      <div className="about-container">
        <div className="cyber-grid"></div>
        <div className="section-header">
          <h2 className="glitch-text" data-text="About_Me.exe">About_Me.exe</h2>
          <div className="tech-line"></div>
        </div>
        <div className="about-content">
          <div className="bio-section">
            <div className="terminal-window">
              <div className="terminal-header">
                <span className="terminal-dots">
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </span>
                <span className="terminal-title">bio.terminal</span>
              </div>
              <div className="terminal-body">
                <span className="line-number">01</span>
                <p><span className="terminal-prompt">$</span> Experienced backend developer with expertise in Node.js, Python, and database management.</p>
                <span className="line-number">02</span>
                <p><span className="terminal-prompt">$</span> Passionate about creating efficient and scalable server architectures.</p>
              </div>
            </div>
          </div>
          <div className="skills">
            <h3 className="cyber-title">Tech_Stack</h3>
            <ul className="skills-grid">
              <li className="skill-item">
                <i className="devicon-nodejs-plain colored"></i>
                <span>Node.js</span>
              </li>
              <li className="skill-item">
                <i className="devicon-python-plain colored"></i>
                <span>Python</span>
              </li>
              <li className="skill-item">
                <i className="devicon-mongodb-plain colored"></i>
                <span>MongoDB</span>
              </li>
              <li className="skill-item">
                <i className="devicon-postgresql-plain colored"></i>
                <span>PostgreSQL</span>
              </li>
              <li className="skill-item">
                <i className="devicon-docker-plain colored"></i>
                <span>Docker</span>
              </li>
              <li className="skill-item">
                <i className="devicon-amazonwebservices-original colored"></i>
                <span>AWS</span>
              </li>
              <li className="skill-item">
                <i className="devicon-react-original colored"></i>
                <span>React</span>
              </li>
              <li className="skill-item">
                <i className="devicon-typescript-plain colored"></i>
                <span>TypeScript</span>
              </li>
              <li className="skill-item">
                <i className="devicon-git-plain colored"></i>
                <span>Git</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
  
  export default About
