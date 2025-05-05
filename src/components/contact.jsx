const Contact = () => {
  return (
    <div className="contact-container">
      <div className="section-header">
        <h2 className="glitch-text" data-text="Contact_Me.exe">Contact_Me.exe</h2>
        <div className="tech-line"></div>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <div className="terminal-window">
            <div className="terminal-header">
              <span className="terminal-dots">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </span>
              <span className="terminal-title">contact.terminal</span>
            </div>
            <div className="terminal-body">
              <span className="line-number">01</span>
              <p><span className="terminal-prompt">$</span> Email: kimhar.lim@gmail.com</p>
              <span className="line-number">02</span>
              <p><span className="terminal-prompt">$</span> Location: Zamboanga, Philippines</p>
              <span className="line-number">03</span>
              <p><span className="terminal-prompt">$</span> Available for: Freelance, Full-time opportunities</p>
              <span className="line-number">04</span>
              <p><span className="terminal-prompt">$</span> Connect with me on social media:</p>
            </div>
          </div>
          
          <div className="social-links">
            <a href="https://github.com/Mhar-lim" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="devicon-github-original"></i>
              <span>GitHub</span>
            </a>
            <a href="https://linkedin.com/in/kimhar-lim" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="devicon-linkedin-plain"></i>
              <span>LinkedIn</span>
            </a>
            <a href="https://facebook.com/kimhar.lim" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="devicon-facebook-plain"></i>
              <span>Facebook</span>
            </a>
          </div>
        </div>
        
        <div className="contact-form-container">
          <h3 className="cyber-title">Send_Message</h3>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Enter your name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" placeholder="Type your message here"></textarea>
            </div>
            <button type="submit" className="cta-button">
              <span className="button-content">Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact