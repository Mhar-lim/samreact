const Hero = () => {
    return (
      <div className="hero-container">
        <div className="cyber-grid"></div>
        <div className="hero-content">
          <div className="hero-text">
            <div className="glitch-container">
              <h1 className="glitch" data-text="John Doe">Hi, I'm Kimhar Alpha Lim</h1>
              <div className="glitch-shadow"></div>
            </div>
            <div className="title-container">
              <h2 className="cyber-title">Backend Developer </h2>
              <div className="tech-line">
                <span className="tech-dot"></span>
              </div>
            </div>
            <p className="cyber-text">
              <span className="bracket">[</span>
                Passionate about building high-performance, secure, and scalable systems
              <span className="bracket">]</span>
            </p>
            <div className="cta-container">
              <button className="cta-button">
                <span className="button-content">Learn More</span>
                <div className="button-borders">
                  <div className="border-top"></div>
                  <div className="border-right"></div>
                  <div className="border-bottom"></div>
                  <div className="border-left"></div>
                </div>
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-frame">
              <div className="scan-line"></div>
              <img src="/graduate.jpeg" alt="John Doe" />
              <div className="frame-corner top-left"></div>
              <div className="frame-corner top-right"></div>
              <div className="frame-corner bottom-left"></div>
              <div className="frame-corner bottom-right"></div>
              <div className="image-glitch"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default Hero
  