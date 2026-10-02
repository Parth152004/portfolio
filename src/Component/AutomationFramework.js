import React from "react";
import "../Style/AutomationFramework.css";
import {
  FaArrowRight,
  FaFileCode,
  FaLayerGroup,
  FaGlobe,
  FaWindowMaximize,
  FaCheckCircle,
  FaChartBar,
} from "react-icons/fa";
import {
  SiJenkins,
  SiSelenium,
  SiOpenjdk,
} from "react-icons/si";

export default function AutomationFramework() {
  const workflowSteps = [
    {
      step: 1,
      title: "Test Case",
      desc: "TestNG scenario definition with annotations (@Test)",
      icon: <FaFileCode />,
    },
    {
      step: 2,
      title: "Page Object",
      desc: "POM layer isolating page web elements and actions",
      icon: <FaLayerGroup />,
    },
    {
      step: 3,
      title: "Selenium WebDriver",
      desc: "Browser automation engine executing actions & waits",
      icon: <SiSelenium />,
    },
    {
      step: 4,
      title: "Application",
      desc: "Web app under test across targeted browsers",
      icon: <FaGlobe />,
    },
    {
      step: 5,
      title: "Assertions",
      desc: "Validating actual vs expected UI & backend state",
      icon: <FaCheckCircle />,
    },
    {
      step: 6,
      title: "TestNG Report",
      desc: "Detailed HTML test reports and failure logs",
      icon: <FaChartBar />,
    },
    {
      step: 7,
      title: "Jenkins CI/CD",
      desc: "Automated trigger & continuous build validation",
      icon: <SiJenkins />,
    },
  ];

  const frameworkPillars = [
    {
      title: "Page Object Model (POM)",
      desc: "Encapsulates web element locators and action methods in dedicated page classes, ensuring low maintenance and high test reusability.",
      icon: <FaLayerGroup />,
    },
    {
      title: "Java & OOP Principles",
      desc: "Leverages object-oriented design, abstract base classes, helper inheritance, and clean interfaces for modular framework architecture.",
      icon: <SiOpenjdk />,
    },
    {
      title: "Selenium WebDriver",
      desc: "Automates browser workflows using dynamic explicit waits, element finding strategies, and cross-browser capability configuration.",
      icon: <SiSelenium />,
    },
    {
      title: "TestNG Test Runner",
      desc: "Structures test execution using test suites (testng.xml), data providers, parameterization, and execution lifecycle hooks.",
      icon: <FaFileCode />,
    },
    {
      title: "Reusable Utilities",
      desc: "Common helpers for explicit waits, automatic screenshot capture on failure, Javascript execution, and dropdown/alert handling.",
      icon: <FaWindowMaximize />,
    },
    {
      title: "Configuration & Test Data",
      desc: "Externalized config.properties for environment URLs, browser targets, timeout settings, and data-driven testing fixtures.",
      icon: <FaChartBar />,
    },
    {
      title: "Assertions & Logging",
      desc: "Hard and soft assertions validating application state, combined with clear console logging for faster failure diagnosis.",
      icon: <FaCheckCircle />,
    },
    {
      title: "CI/CD & Jenkins Pipeline",
      desc: "Integration with Maven build commands and Jenkins pipeline jobs for automated regression execution and build health monitoring.",
      icon: <SiJenkins />,
    },
  ];

  return (
    <section className="section-wrapper automation-section" id="automation">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Architecture & Design</span>
          <h2 className="section-title">Automation Framework</h2>
          <p className="section-subtitle">
            I have worked with Java-based automation frameworks using Selenium WebDriver and TestNG,
            with a focus on reusable test components, maintainability, test execution, debugging, and reporting.
          </p>
          <div className="section-divider"></div>
        </div>

        {/* Visual Workflow Pipeline Banner */}
        <div className="framework-pipeline-wrapper">
          <div className="pipeline-header">
            <h3 className="pipeline-title">
              <span className="pipeline-indicator"></span> End-to-End Test Execution Workflow
            </h3>
            <span className="pipeline-tag">Execution Pipeline</span>
          </div>

          <div className="pipeline-flow">
            {workflowSteps.map((item, idx) => (
              <React.Fragment key={idx}>
                <div className="pipeline-node">
                  <div className="node-icon-wrap">{item.icon}</div>
                  <div className="node-step">Step {item.step}</div>
                  <h4 className="node-title">{item.title}</h4>
                  <p className="node-desc">{item.desc}</p>
                </div>
                {idx < workflowSteps.length - 1 && (
                  <div className="pipeline-connector">
                    <FaArrowRight className="connector-arrow" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Framework Structural Pillars */}
        <div className="pillars-wrapper mt-5">
          <h3 className="pillars-section-title">Core Framework Components</h3>
          <div className="pillars-grid">
            {frameworkPillars.map((pillar, idx) => (
              <div className="pillar-card" key={idx}>
                <div className="pillar-icon">{pillar.icon}</div>
                <h4 className="pillar-title">{pillar.title}</h4>
                <p className="pillar-desc">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
