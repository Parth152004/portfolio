import React from "react";
import "../Style/About.css";
import {
  FaVial,
  FaDesktop,
  FaServer,
  FaDatabase,
  FaCogs,
  FaBug,
  FaCodeBranch,
  FaShieldAlt,
} from "react-icons/fa";

export default function About() {
  const focusAreas = [
    {
      title: "Test Automation",
      desc: "Java & Selenium test suites",
      icon: <FaVial />,
    },
    {
      title: "UI Testing",
      desc: "End-to-end browser workflows",
      icon: <FaDesktop />,
    },
    {
      title: "API Testing",
      desc: "REST validation & status codes",
      icon: <FaServer />,
    },
    {
      title: "Database Validation",
      desc: "SQL Server backend integrity",
      icon: <FaDatabase />,
    },
    {
      title: "Test Frameworks",
      desc: "POM, reusable components, TestNG",
      icon: <FaCogs />,
    },
    {
      title: "Debugging & RCA",
      desc: "Root cause analysis of failed tests",
      icon: <FaBug />,
    },
    {
      title: "CI/CD Testing",
      desc: "Jenkins automated execution",
      icon: <FaCodeBranch />,
    },
    {
      title: "Software Quality",
      desc: "Reliability & test coverage",
      icon: <FaShieldAlt />,
    },
  ];

  return (
    <section className="section-wrapper about-section" id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">About Me</span>
          <h2 className="section-title">Dedicated to Reliable Software Quality</h2>
          <p className="section-subtitle">
            Bridging requirements, robust test automation frameworks, and stable application delivery.
          </p>
          <div className="section-divider"></div>
        </div>

        <div className="row g-5 align-items-center">
          {/* Left Column: Story and Background */}
          <div className="col-lg-6">
            <div className="about-bio-card">
              <h3 className="bio-lead-text">
                Hello, I'm <span className="cyan-text">Parth Patel</span>, a QA Automation Engineer with a strong interest in software quality, test automation, and reliable application delivery.
              </h3>

              <div className="bio-body-paragraphs">
                <p>
                  I work primarily with Java-based automation technologies and have hands-on experience with <strong>Selenium WebDriver, TestNG, API testing, SQL/database validation, Git, Jenkins</strong>, and automation framework practices.
                </p>
                <p>
                  My experience includes designing and maintaining automated test cases, validating application workflows, investigating test failures, debugging automation issues, performing backend data validation, and supporting API testing. I focus on writing maintainable automation and understanding failures rather than simply executing test scripts.
                </p>
                <p>
                  I enjoy solving testing problems through automation and continuously improving test coverage, reliability, and execution efficiency. I am also interested in CI/CD integration and building automation solutions that can be executed consistently across development and testing environments.
                </p>
                <p className="target-roles-highlight">
                  🎯 <strong>Target Roles:</strong> QA Automation Engineer · Software Test Engineer · Automation Test Engineer · QA Engineer · SDET / Junior SDET
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: What I Focus On Grid */}
          <div className="col-lg-6">
            <div className="focus-container">
              <h3 className="focus-heading">
                <span className="code-accent">&lt;Focus Areas /&gt;</span> What I Focus On
              </h3>
              <div className="focus-grid">
                {focusAreas.map((item, idx) => (
                  <div className="focus-card" key={idx}>
                    <div className="focus-icon-wrap">{item.icon}</div>
                    <div className="focus-details">
                      <h4 className="focus-item-title">{item.title}</h4>
                      <p className="focus-item-desc">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
