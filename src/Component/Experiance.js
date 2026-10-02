import React from "react";
import "../Style/Experiance.css";
import {
  FaCheckCircle,
  FaVial,
  FaUsers,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Experience() {
  const qaResponsibilities = [
    "Developed and maintained automated test cases using Java, Selenium WebDriver, and TestNG for robust application testing.",
    "Engineered UI automation scripts to validate critical end-to-end user workflows across multiple browser environments.",
    "Designed and executed comprehensive test scenarios based on business requirements and expected system behavior.",
    "Investigated automation execution failures, debugged test scripts, and conducted root cause analysis (RCA) on defect patterns.",
    "Performed backend data validation and verification using SQL Server queries to ensure UI-to-database state consistency.",
    "Conducted API testing and API automation to validate REST endpoints, request/response structures, headers, and status codes.",
    "Contributed to enhancing test reliability and reducing test flakiness by refactoring existing automated test scenarios.",
    "Utilized Git and GitHub for test suite version control, branch management, and collaborative code reviews.",
    "Executed automated test suites within Jenkins CI/CD pipelines to support continuous testing and build health monitoring.",
    "Implemented Page Object Model (POM) and modular framework practices to produce reusable, maintainable test components.",
    "Collaborated closely with development teams to analyze requirements, investigate defects, and expand overall test coverage.",
  ];

  return (
    <section className="section-wrapper experience-section" id="experience">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Career & Roles</span>
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">
            Hands-on software testing, automated test case development, and team collaboration.
          </p>
          <div className="section-divider"></div>
        </div>

        <div className="experience-timeline">
          {/* Main Experience: QA Automation & Software Testing */}
          <div className="experience-card main-qa-role">
            <div className="exp-card-header">
              <div className="exp-role-info">
                <div className="exp-badge">
                  <FaVial className="me-1" /> Core Practice
                </div>
                <h3 className="exp-role-title">
                  QA Automation & Software Testing Experience
                </h3>
                <h4 className="exp-company-sub">
                  Java · Selenium WebDriver · TestNG · API · SQL Server
                </h4>
              </div>
              <div className="exp-meta-info">
                <span className="meta-item">
                  <FaCalendarAlt className="me-1" /> Ongoing Practice
                </span>
                <span className="meta-item">
                  <FaMapMarkerAlt className="me-1" /> India
                </span>
              </div>
            </div>

            <div className="exp-divider"></div>

            <h5 className="responsibilities-title">Key Contributions & Achievements:</h5>
            <ul className="exp-bullets-list">
              {qaResponsibilities.map((resp, idx) => (
                <li className="exp-bullet-item" key={idx}>
                  <FaCheckCircle className="bullet-icon" />
                  <span>{resp}</span>
                </li>
              ))}
            </ul>

            <div className="exp-tech-tags">
              <span className="exp-tech-tag">Java</span>
              <span className="exp-tech-tag">Selenium WebDriver</span>
              <span className="exp-tech-tag">TestNG</span>
              <span className="exp-tech-tag">REST API Testing</span>
              <span className="exp-tech-tag">SQL Server</span>
              <span className="exp-tech-tag">Jenkins CI/CD</span>
              <span className="exp-tech-tag">Git / GitHub</span>
              <span className="exp-tech-tag">Page Object Model (POM)</span>
              <span className="exp-tech-tag">Root Cause Analysis</span>
            </div>
          </div>

          {/* Secondary Experience: CSI Leadership */}
          <div className="experience-card csi-role">
            <div className="exp-card-header">
              <div className="exp-role-info">
                <div className="exp-badge csi-badge">
                  <FaUsers className="me-1" /> Leadership & Events
                </div>
                <h3 className="exp-role-title">Junior Associate</h3>
                <h4 className="exp-company-sub">Computer Society of India (CSI)</h4>
              </div>
            </div>

            <div className="exp-divider"></div>

            <p className="csi-description">
              Collaborated in a team of 16 associates to coordinate and execute technical events, workshops,
              and hackathons across various academic institutions. Managed events with 60 to 110+ attendees,
              ensuring seamless logistics, speaker coordination, and fostering an active tech-learning environment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
