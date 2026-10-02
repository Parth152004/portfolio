import React, { useState } from "react";
import "../Style/Resume.css";
import {
  FaFileDownload,
  FaCheckCircle,
  FaEnvelope,
  FaFilePdf,
  FaEye,
  FaTimes,
  FaPrint,
  FaBriefcase,
  FaGraduationCap,
  FaAward,
  FaCode,
} from "react-icons/fa";

export default function Resume() {
  const [showPreview, setShowPreview] = useState(false);

  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setShowPreview(false);
      }
    };
    if (showPreview) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [showPreview]);

  const highlights = [
    "Specialized in Java, Selenium WebDriver & TestNG Automation",
    "Hands-on with REST API Testing, JSON Validation & Swagger",
    "SQL Server Backend Validation & Data Verification Queries",
    "Jenkins CI/CD Automation & Git Branching Practices",
    "Page Object Model (POM) Design Pattern & Test Frameworks",
    "Defect Investigation, Debugging & Root Cause Analysis (RCA)",
  ];

  const handleDownload = (e) => {
    // Proactive trigger to ensure download works across all environments
    const link = document.createElement("a");
    link.href = "./Parth_Patel_QA_Automation_Resume.pdf";
    link.download = "Parth_Patel_QA_Automation_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const printResume = () => {
    window.print();
  };

  return (
    <section className="section-wrapper resume-section" id="resume" data-testid="section-resume">
      <div className="container">
        <div className="resume-card-box">
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <div className="resume-badge">
                <FaFilePdf className="me-2" /> Verified Resume Dossier
              </div>
              <h2 className="resume-main-heading">
                Want to know more about my experience?
              </h2>
              <p className="resume-subtext">
                View or download my resume to see my complete experience, technical skills, and QA automation background.
              </p>

              <div className="resume-highlights-grid">
                {highlights.map((item, idx) => (
                  <div className="res-highlight-item" key={idx}>
                    <FaCheckCircle className="res-check-icon" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-4 text-lg-end text-center">
              <div className="resume-action-box">
                {/* Direct Download Button */}
                <button
                  type="button"
                  onClick={handleDownload}
                  className="btn-download-resume"
                  data-testid="btn-download-resume"
                >
                  <FaFileDownload className="btn-icon" />
                  <span>Download Resume (PDF)</span>
                </button>

                {/* Interactive Preview Button */}
                <button
                  type="button"
                  onClick={() => setShowPreview(true)}
                  className="btn-preview-resume"
                  data-testid="btn-preview-resume"
                >
                  <FaEye className="btn-icon" />
                  <span>View Resume On-Screen</span>
                </button>

                <a
                  href="mailto:patelparth1167@gmail.com?subject=Resume%20Inquiry%20-%20Parth%20Patel%20QA%20Automation"
                  className="btn-contact-resume"
                >
                  <FaEnvelope className="btn-icon" />
                  <span>Request Full Dossier</span>
                </a>

                <span className="file-info-note">
                  PDF Format · Updated for QA Automation & SDET roles
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* On-Screen Interactive Resume Modal */}
      {showPreview && (
        <div
          className="resume-modal-overlay"
          onClick={() => setShowPreview(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="resume-modal-sheet"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Controls Bar */}
            <div className="resume-modal-controls-bar">
              <div className="resume-modal-title">
                <FaFilePdf className="me-2 text-danger" /> Parth_Patel_QA_Automation_Resume.pdf
              </div>

              <div className="modal-actions-right">
                <button
                  type="button"
                  className="btn-modal-action print-btn"
                  onClick={printResume}
                  title="Print Resume"
                >
                  <FaPrint className="me-1" /> Print
                </button>
                <button
                  type="button"
                  className="btn-modal-action download-btn"
                  onClick={handleDownload}
                  title="Download PDF"
                >
                  <FaFileDownload className="me-1" /> Download
                </button>
                <button
                  type="button"
                  className="btn-modal-close"
                  onClick={() => setShowPreview(false)}
                  aria-label="Close"
                >
                  <FaTimes />
                </button>
              </div>
            </div>

            {/* Resume Document Paper View */}
            <div className="resume-document-paper">
              {/* Header */}
              <div className="resume-doc-header">
                <h1 className="doc-candidate-name">PARTH PATEL</h1>
                <h2 className="doc-candidate-title">
                  QA Automation Engineer | Java · Selenium · TestNG · API Testing
                </h2>
                <div className="doc-contact-line">
                  <span>patelparth1167@gmail.com</span>
                  <span>•</span>
                  <span>+91 94287 80513</span>
                  <span>•</span>
                  <span>linkedin.com/in/patelparth123</span>
                  <span>•</span>
                  <span>github.com/Parth152004</span>
                </div>
              </div>

              {/* Summary */}
              <div className="resume-doc-section">
                <h3 className="doc-sec-title">
                  <FaBriefcase className="sec-icon" /> Professional Summary
                </h3>
                <p className="doc-text">
                  QA Automation Engineer with hands-on experience in Java-based test automation, Selenium WebDriver,
                  TestNG, API testing, SQL database validation, debugging, and CI/CD practices. Experienced in designing
                  maintainable Page Object Model (POM) automation frameworks, investigating root causes, and executing
                  continuous testing pipelines.
                </p>
              </div>

              {/* Technical Skills */}
              <div className="resume-doc-section">
                <h3 className="doc-sec-title">
                  <FaCode className="sec-icon" /> Technical Competencies
                </h3>
                <div className="doc-skills-list">
                  <div><strong>Programming:</strong> Java, SQL</div>
                  <div><strong>Test Automation:</strong> Selenium WebDriver, TestNG, Page Object Model (POM), UI Automation, Test Case Automation</div>
                  <div><strong>API & Backend:</strong> REST API Testing, API Automation, Swagger / OpenAPI, SQL Server Database Validation</div>
                  <div><strong>CI/CD & DevOps:</strong> Jenkins, Git, GitHub, Maven, Automated Test Execution</div>
                  <div><strong>Testing Practices:</strong> Functional, Regression, Integration, Smoke Testing, Debugging, Root Cause Analysis (RCA)</div>
                </div>
              </div>

              {/* Experience */}
              <div className="resume-doc-section">
                <h3 className="doc-sec-title">
                  <FaBriefcase className="sec-icon" /> QA Automation & Testing Experience
                </h3>
                <ul className="doc-bullet-list">
                  <li>Developed and maintained automated test cases using Java, Selenium WebDriver, and TestNG for application testing.</li>
                  <li>Engineered UI automation scripts to validate critical end-to-end user workflows across multiple browser environments.</li>
                  <li>Conducted API testing and API automation to validate REST endpoints, request/response structures, headers, and status codes.</li>
                  <li>Performed backend data validation and verification using SQL Server queries to ensure UI-to-database state consistency.</li>
                  <li>Investigated automation execution failures, debugged test scripts, and conducted root cause analysis (RCA).</li>
                  <li>Executed automated test suites within Jenkins CI/CD pipelines to support continuous testing and build health monitoring.</li>
                  <li>Implemented Page Object Model (POM) and modular framework practices to produce reusable, maintainable test components.</li>
                </ul>
              </div>

              {/* Featured Projects */}
              <div className="resume-doc-section">
                <h3 className="doc-sec-title">
                  <FaAward className="sec-icon" /> Featured QA Projects
                </h3>
                <div className="doc-project-item">
                  <strong>1. Java Selenium Test Automation Framework:</strong> Page Object Model (POM), TestNG DataProviders, Reusable Utilities, Explicit Waits, Screenshot on Failure.
                </div>
                <div className="doc-project-item">
                  <strong>2. REST API Testing & Automation Suite:</strong> REST API Endpoints, Status Codes (200, 201, 400), JSON Schema Validation, Swagger Documentation.
                </div>
                <div className="doc-project-item">
                  <strong>3. SQL Database Validation Suite:</strong> SQL Server Backend Verification, Transaction Consistency, CRUD Validation.
                </div>
                <div className="doc-project-item">
                  <strong>4. CI/CD Automated Test Pipeline:</strong> Jenkins Build Integration, Automated Triggers, Maven execution, TestNG HTML Reporting.
                </div>
              </div>

              {/* Education & Certs */}
              <div className="resume-doc-section">
                <h3 className="doc-sec-title">
                  <FaGraduationCap className="sec-icon" /> Certifications & Education
                </h3>
                <div className="doc-certs-line">
                  <span>• AWS Academy Graduate - Cloud Foundations</span>
                  <span>• Java with Data Structures & Algorithms</span>
                  <span>• Machine Learning Course Certification</span>
                  <span>• Full Stack Development Program (Internshala)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
