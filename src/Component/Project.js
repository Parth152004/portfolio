import React, { useState } from "react";
import "../Style/Project.css";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaVial,
  FaServer,
  FaDatabase,
  FaCodeBranch,
  FaCheckCircle,
} from "react-icons/fa";

export default function Project() {
  const [activeTab, setActiveTab] = useState("qa");

  const qaProjects = [
    {
      title: "Java Selenium Test Automation Framework",
      tag: "UI Automation",
      icon: <FaVial />,
      problemStatement:
        "Eliminating repetitive manual regression execution by creating a structured, maintainable automated test suite for end-to-end web application workflows.",
      whatITested:
        "User authentication, dynamic forms, dropdown menus, table validations, multi-step navigation flows, and error alert handling.",
      contribution:
        "Implemented Page Object Model (POM) architecture, developed reusable base test utilities, integrated TestNG assertions, and configured cross-browser test suites.",
      concepts: [
        "Page Object Model (POM)",
        "TestNG Assertions",
        "Explicit / Fluent Waits",
        "Screenshot on Failure",
        "Data-Driven Testing",
      ],
      technologies: ["Java", "Selenium WebDriver", "TestNG", "Maven", "Git"],
      githubLink: "https://github.com/Parth152004",
    },
    {
      title: "REST API Testing & Automation Suite",
      tag: "API Testing",
      icon: <FaServer />,
      problemStatement:
        "Verifying backend service reliability, response contracts, payload schemas, and correct status codes across interdependent service endpoints.",
      whatITested:
        "REST API endpoints, HTTP status codes (200, 201, 400, 404, 500), JSON response schema structures, request headers, query parameters, and error responses.",
      contribution:
        "Designed comprehensive positive and negative test scenarios, validated JSON payload data against expected specifications, and verified API error handling.",
      concepts: [
        "Status Code Validation",
        "JSON Response Verification",
        "Payload Assertions",
        "Boundary Testing",
        "Swagger / OpenAPI Docs",
      ],
      technologies: ["REST API", "Java", "API Automation", "Swagger / OpenAPI", "JSON"],
      githubLink: "https://github.com/Parth152004",
    },
    {
      title: "SQL Database Validation & Integrity Testing",
      tag: "Database Testing",
      icon: <FaDatabase />,
      problemStatement:
        "Validating that data submitted from UI workflows is accurately persisted and transformed in backend database tables without data corruption.",
      whatITested:
        "Database table records, CRUD operation integrity, primary/foreign key constraints, null value constraints, and data consistency between UI and DB.",
      contribution:
        "Wrote complex SQL queries to verify backend state before and after UI actions, tested transactional integrity, and confirmed data persistence across sessions.",
      concepts: [
        "SQL Query Verification",
        "Data Consistency Checks",
        "CRUD Validation",
        "Table Integrity Audits",
      ],
      technologies: ["SQL", "SQL Server", "Database Testing", "Data Verification"],
      githubLink: "https://github.com/Parth152004",
    },
    {
      title: "CI/CD Test Automation & Execution Pipeline",
      tag: "CI/CD & DevOps",
      icon: <FaCodeBranch />,
      problemStatement:
        "Automating regression and smoke test execution within build pipelines to deliver immediate feedback on application build quality.",
      whatITested:
        "Automated regression execution suites, smoke tests on new commits, and post-build test report generation.",
      contribution:
        "Configured Maven execution targets, connected test repository to Jenkins jobs, and structured automated HTML test report archiving on build completion.",
      concepts: [
        "Automated Test Triggers",
        "Continuous Testing",
        "TestNG HTML Reporting",
        "Failure Diagnostics",
      ],
      technologies: ["Jenkins", "Git", "Java", "Selenium", "TestNG", "Maven"],
      githubLink: "https://github.com/Parth152004",
    },
  ];

  const appProjects = [
    {
      title: "Tomato Leaf Disease Detection",
      tag: "ML & Full-Stack",
      image: "./Projectimage/Tomato_project.png",
      description:
        "Empowers agricultural practitioners with early disease detection using machine learning models (87% classification accuracy). Built with React frontend, Django/Python backend, and AWS S3 storage.",
      technologies: ["React", "Python", "Django", "Machine Learning", "AWS"],
      link: "https://github.com/itsunilvithlani/2024_G2_Crop-Disease-Classification/tree/frontend",
    },
    {
      title: "Movie Review & Community Platform",
      tag: "Web Application",
      image: "./Projectimage/Movie_review.png",
      description:
        "Interactive platform for movie enthusiasts to submit reviews, search film catalogs, and participate in discussions. Built with React frontend, Java Spring Boot backend, and MySQL database.",
      technologies: ["React", "Spring Boot", "Java", "MySQL", "REST API"],
      link: "https://github.com/Parth152004/Review-website",
    },
    {
      title: "Ahharmandir Food Delivery",
      tag: "Full-Stack MERN",
      image: "./Projectimage/Fooddelever.png",
      description:
        "Application facilitating restaurant exploration, menu browsing, and simulated order processing using full MERN stack components.",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
      link: "https://github.com/Parth152004",
    },
  ];

  return (
    <section className="section-wrapper projects-section" id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Featured Work</span>
          <h2 className="section-title">Projects & Test Suites</h2>
          <p className="section-subtitle">
            Demonstrating test automation frameworks, API validation suites, database verification, and application engineering.
          </p>
          <div className="section-divider"></div>
        </div>

        {/* Tab Toggle */}
        <div className="project-tabs-container">
          <button
            type="button"
            className={`project-tab-btn ${activeTab === "qa" ? "active" : ""}`}
            onClick={() => setActiveTab("qa")}
          >
            <FaVial className="me-2" /> QA & Automation Projects
          </button>
          <button
            type="button"
            className={`project-tab-btn ${activeTab === "app" ? "active" : ""}`}
            onClick={() => setActiveTab("app")}
          >
            <FaExternalLinkAlt className="me-2" /> Application Development
          </button>
        </div>

        {/* QA Projects View */}
        {activeTab === "qa" && (
          <div className="qa-projects-grid">
            {qaProjects.map((proj, idx) => (
              <div className="qa-project-card" key={idx}>
                <div className="qa-card-header">
                  <div className="qa-card-icon-title">
                    <div className="qa-icon-wrap">{proj.icon}</div>
                    <div>
                      <span className="qa-tag-badge">{proj.tag}</span>
                      <h3 className="qa-project-title">{proj.title}</h3>
                    </div>
                  </div>
                  {proj.githubLink && (
                    <a
                      href={proj.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="qa-github-link"
                      aria-label="GitHub Repository"
                    >
                      <FaGithub />
                    </a>
                  )}
                </div>

                <div className="qa-card-body">
                  <div className="qa-detail-block">
                    <h4 className="block-label">Problem Statement:</h4>
                    <p className="block-text">{proj.problemStatement}</p>
                  </div>

                  <div className="qa-detail-block">
                    <h4 className="block-label">What Was Tested:</h4>
                    <p className="block-text">{proj.whatITested}</p>
                  </div>

                  <div className="qa-detail-block">
                    <h4 className="block-label">Key Concepts & Features:</h4>
                    <div className="concepts-list">
                      {proj.concepts.map((concept, cIdx) => (
                        <span className="concept-pill" key={cIdx}>
                          <FaCheckCircle className="concept-icon" /> {concept}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="qa-card-footer">
                  <div className="qa-tech-stack">
                    {proj.technologies.map((tech, tIdx) => (
                      <span className="tech-badge" key={tIdx}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Application Projects View */}
        {activeTab === "app" && (
          <div className="app-projects-grid">
            {appProjects.map((proj, idx) => (
              <div className="app-project-card" key={idx}>
                {proj.image && (
                  <div className="app-image-wrap">
                    <img src={proj.image} alt={proj.title} className="app-project-img" />
                    <span className="app-tag-badge">{proj.tag}</span>
                  </div>
                )}
                <div className="app-card-body">
                  <h3 className="app-project-title">{proj.title}</h3>
                  <p className="app-project-desc">{proj.description}</p>
                  <div className="app-tech-tags">
                    {proj.technologies.map((tech, tIdx) => (
                      <span className="tech-badge" key={tIdx}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="app-card-footer">
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noreferrer"
                    className="app-link-btn"
                  >
                    <FaGithub className="me-2" /> View Repository
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
