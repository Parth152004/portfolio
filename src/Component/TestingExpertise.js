import React from "react";
import "../Style/TestingExpertise.css";
import {
  FaLaptopCode,
  FaExchangeAlt,
  FaDatabase,
  FaRedoAlt,
  FaCheckDouble,
  FaProjectDiagram,
  FaSearchMinus,
} from "react-icons/fa";

export default function TestingExpertise() {
  const testingTypes = [
    {
      title: "UI Automation",
      desc: "Automating web application workflows and validating user-facing functionality using Selenium WebDriver.",
      icon: <FaLaptopCode />,
      tags: ["Selenium", "WebDriver", "Page Objects", "Cross-Browser"],
      accent: "cyan",
    },
    {
      title: "API Testing",
      desc: "Validating REST APIs, responses, status codes, request parameters, and backend behavior.",
      icon: <FaExchangeAlt />,
      tags: ["REST Endpoints", "JSON Payload", "Status Codes", "Headers"],
      accent: "blue",
    },
    {
      title: "Database Testing",
      desc: "Validating backend data and schema consistency using SQL and SQL Server queries.",
      icon: <FaDatabase />,
      tags: ["SQL Server", "Data Integrity", "CRUD Validation", "Constraints"],
      accent: "teal",
    },
    {
      title: "Regression Testing",
      desc: "Automating repetitive regression scenarios to improve testing efficiency, stability, and consistency.",
      icon: <FaRedoAlt />,
      tags: ["Test Suites", "Automation Runs", "Build Validation", "Repeatability"],
      accent: "green",
    },
    {
      title: "Functional Testing",
      desc: "Validating application functionality against expected requirements and end-to-end user workflows.",
      icon: <FaCheckDouble />,
      tags: ["Requirements Trace", "User Flows", "Positive & Negative", "Edge Cases"],
      accent: "amber",
    },
    {
      title: "Integration Testing",
      desc: "Checking seamless interactions between frontend application components and backend services.",
      icon: <FaProjectDiagram />,
      tags: ["Component Linkage", "Service Contracts", "Workflow Sync"],
      accent: "purple",
    },
    {
      title: "Debugging & RCA",
      desc: "Investigating failed automated tests and identifying the underlying root cause rather than only reporting the failure.",
      icon: <FaSearchMinus />,
      tags: ["Stack Traces", "Failure Diagnostics", "Log Analysis", "Fix Verification"],
      accent: "red",
    },
  ];

  return (
    <section className="section-wrapper expertise-section" id="expertise">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Testing Expertise</span>
          <h2 className="section-title">What I Test & Validate</h2>
          <p className="section-subtitle">
            Comprehensive testing coverage spanning browser interfaces, service layers, data storage, and automated regression suites.
          </p>
          <div className="section-divider"></div>
        </div>

        <div className="expertise-grid">
          {testingTypes.map((item, idx) => (
            <div className={`expertise-card accent-${item.accent}`} key={idx}>
              <div className="card-top-row">
                <div className="expertise-icon">{item.icon}</div>
                <span className="card-badge">QA Practice</span>
              </div>
              <h3 className="expertise-card-title">{item.title}</h3>
              <p className="expertise-card-desc">{item.desc}</p>
              <div className="expertise-tags">
                {item.tags.map((tag, tIdx) => (
                  <span className="exp-tag" key={tIdx}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
