import React from "react";
import "../Style/Home.css";
import { scroller } from "react-scroll";
import { FaLinkedin, FaGithub, FaEnvelope, FaFileDownload, FaPlayCircle, FaCheckCircle } from "react-icons/fa";
import { SiSelenium, SiOpenjdk, SiPostman } from "react-icons/si";

export default function Home() {
  const scrollTo = (target) => {
    scroller.scrollTo(target, {
      smooth: true,
      duration: 500,
      offset: -80,
    });
  };

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "./Parth_Patel_QA_Automation_Resume.pdf";
    link.download = "Parth_Patel_QA_Automation_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="hero-section" id="home" data-testid="section-hero">
      {/* Background Video */}
      <video className="hero-background-video" autoPlay loop muted playsInline>
        <source src="./videobk.mp4" type="video/mp4" />
      </video>

      {/* Dark Cyberpunk / Modern Tech Overlay */}
      <div className="hero-overlay">
        <div className="container hero-container">
          <div className="row align-items-center g-5">
            {/* Left Column: Hero Intro Content */}
            <div className="col-lg-7 hero-left-content">
              <div className="hero-badge">
                <span className="pulse-indicator"></span>
                <span>Open for QA Automation & SDET Roles</span>
              </div>

              <h1 className="hero-main-title">
                Hi, I'm <span className="highlight-text">Parth Patel</span>
              </h1>

              <h2 className="hero-subtitle">
                QA Automation Engineer
              </h2>

              <p className="hero-description">
                QA Automation Engineer with hands-on experience in Java-based test automation,
                Selenium WebDriver, TestNG, API testing, SQL database validation, debugging,
                and CI/CD practices. I enjoy building reliable automation solutions that improve
                software quality and reduce repetitive manual testing.
              </p>

              {/* Core Skill Pills */}
              <div className="hero-tech-pills">
                <span className="tech-pill"><SiOpenjdk className="pill-icon" /> Java</span>
                <span className="tech-pill"><SiSelenium className="pill-icon" /> Selenium</span>
                <span className="tech-pill">TestNG</span>
                <span className="tech-pill"><SiPostman className="pill-icon" /> REST API</span>
                <span className="tech-pill">SQL Server</span>
                <span className="tech-pill">Jenkins CI/CD</span>
              </div>

              {/* Action Buttons */}
              <div className="hero-action-buttons">
                <button
                  type="button"
                  className="btn-hero-primary"
                  onClick={() => scrollTo("projects")}
                >
                  <FaPlayCircle className="me-2" /> View My Work
                </button>

                <button
                  type="button"
                  className="btn-hero-secondary"
                  onClick={handleResumeDownload}
                  data-testid="btn-hero-resume"
                >
                  <FaFileDownload className="me-2" /> Download Resume
                </button>
              </div>

              {/* Social & Contact Links */}
              <div className="hero-social-links">
                <span className="social-label">Connect:</span>
                <a
                  href="https://www.linkedin.com/in/patelparth123/"
                  target="_blank"
                  rel="noreferrer"
                  className="social-btn"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/Parth152004"
                  target="_blank"
                  rel="noreferrer"
                  className="social-btn"
                  aria-label="GitHub Profile"
                >
                  <FaGithub />
                </a>
                <a
                  href="mailto:patelparth1167@gmail.com"
                  className="social-btn"
                  aria-label="Send Email"
                >
                  <FaEnvelope />
                </a>
              </div>
            </div>

            {/* Right Column: QA Automation Visual Terminal Card */}
            <div className="col-lg-5 hero-right-content">
              <div className="qa-terminal-card">
                <div className="terminal-header">
                  <div className="terminal-dots">
                    <span className="dot red"></span>
                    <span className="dot yellow"></span>
                    <span className="dot green"></span>
                  </div>
                  <div className="terminal-title">TestExecutionSuite.java — Runner</div>
                  <span className="terminal-tag">TestNG</span>
                </div>

                <div className="terminal-body">
                  <div className="code-line">
                    <span className="keyword">@Test</span>(priority = 1)
                  </div>
                  <div className="code-line">
                    <span className="keyword">public void</span> <span className="func">verifyApplicationWorkflow</span>() &#123;
                  </div>
                  <div className="code-line indent">
                    <span className="var">LoginPage</span> login = <span className="keyword">new</span> <span className="type">LoginPage</span>(driver);
                  </div>
                  <div className="code-line indent">
                    login.<span className="func">authenticateUser</span>(validUser);
                  </div>
                  <div className="code-line indent">
                    <span className="type">Assert</span>.<span className="func">assertTrue</span>(dashboard.<span className="func">isLoaded</span>());
                  </div>
                  <div className="code-line">&#125;</div>

                  <div className="terminal-divider"></div>

                  <div className="test-status-summary">
                    <div className="status-item pass">
                      <FaCheckCircle className="status-icon" />
                      <span>UI Automation: <strong>PASSED</strong></span>
                    </div>
                    <div className="status-item pass">
                      <FaCheckCircle className="status-icon" />
                      <span>API Status 200: <strong>PASSED</strong></span>
                    </div>
                    <div className="status-item pass">
                      <FaCheckCircle className="status-icon" />
                      <span>SQL Data Integrity: <strong>VERIFIED</strong></span>
                    </div>
                  </div>

                  <div className="terminal-footer-metric">
                    <span className="metric-label">Execution Time:</span>
                    <span className="metric-val">1.42s</span>
                    <span className="metric-divider">|</span>
                    <span className="metric-label">Build:</span>
                    <span className="metric-val green-text">#Jenkins-Stable</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll down indicator */}
        <div className="scroll-indicator-wrap" onClick={() => scrollTo("about")}>
          <span className="scroll-text">Explore Portfolio</span>
          <div className="mouse-scroll">
            <div className="wheel"></div>
          </div>
        </div>
      </div>
    </section>
  );
}