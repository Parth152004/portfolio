import React, { useState } from "react";
import "../Style/Skill.css";
import {
  FaCode,
  FaVial,
  FaServer,
  FaCodeBranch,
  FaTasks,
} from "react-icons/fa";
import {
  SiSelenium,
  SiOpenjdk,
  SiJenkins,
  SiGit,
  SiGithub,
  SiPostman,
  SiSwagger,
} from "react-icons/si";

export default function Skill() {
  const [activeCategory, setActiveCategory] = useState("all");

  const skillData = [
    {
      category: "programming",
      categoryTitle: "Programming",
      categoryIcon: <FaCode />,
      skills: [
        { name: "Java", level: "Primary", icon: <SiOpenjdk /> },
        { name: "SQL", level: "Hands-on", icon: <FaCode /> },
      ],
    },
    {
      category: "automation",
      categoryTitle: "Test Automation",
      categoryIcon: <FaVial />,
      skills: [
        { name: "Selenium WebDriver", level: "Primary", icon: <SiSelenium /> },
        { name: "TestNG", level: "Primary", icon: <FaVial /> },
        { name: "Java-based Automation", level: "Primary", icon: <SiOpenjdk /> },
        { name: "UI Automation", level: "Primary", icon: <FaVial /> },
        { name: "Test Case Automation", level: "Hands-on", icon: <FaVial /> },
        { name: "Automation Frameworks", level: "Hands-on", icon: <FaVial /> },
        { name: "Page Object Model (POM)", level: "Hands-on", icon: <FaVial /> },
      ],
    },
    {
      category: "api",
      categoryTitle: "API & Backend Testing",
      categoryIcon: <FaServer />,
      skills: [
        { name: "REST API Testing", level: "Hands-on", icon: <SiPostman /> },
        { name: "API Automation", level: "Hands-on", icon: <SiPostman /> },
        { name: "Swagger / OpenAPI", level: "Working Knowledge", icon: <SiSwagger /> },
        { name: "Backend Validation", level: "Hands-on", icon: <FaServer /> },
        { name: "SQL Database Validation", level: "Hands-on", icon: <FaServer /> },
        { name: "SQL Server", level: "Working Knowledge", icon: <FaServer /> },
      ],
    },
    {
      category: "cicd",
      categoryTitle: "CI/CD & DevOps",
      categoryIcon: <FaCodeBranch />,
      skills: [
        { name: "Jenkins", level: "Working Knowledge", icon: <SiJenkins /> },
        { name: "Git", level: "Hands-on", icon: <SiGit /> },
        { name: "GitHub", level: "Hands-on", icon: <SiGithub /> },
        { name: "CI/CD Practices", level: "Working Knowledge", icon: <FaCodeBranch /> },
        { name: "Automated Test Execution", level: "Hands-on", icon: <FaCodeBranch /> },
      ],
    },
    {
      category: "practices",
      categoryTitle: "Testing Practices",
      categoryIcon: <FaTasks />,
      skills: [
        { name: "Functional Testing", level: "Hands-on", icon: <FaTasks /> },
        { name: "Regression Testing", level: "Hands-on", icon: <FaTasks /> },
        { name: "Integration Testing", level: "Hands-on", icon: <FaTasks /> },
        { name: "Smoke Testing", level: "Hands-on", icon: <FaTasks /> },
        { name: "Test Case Design", level: "Hands-on", icon: <FaTasks /> },
        { name: "Defect Investigation", level: "Hands-on", icon: <FaTasks /> },
        { name: "Debugging", level: "Primary", icon: <FaTasks /> },
        { name: "Root Cause Analysis", level: "Hands-on", icon: <FaTasks /> },
        { name: "Test Reporting", level: "Hands-on", icon: <FaTasks /> },
      ],
    },
  ];

  const filteredCategories =
    activeCategory === "all"
      ? skillData
      : skillData.filter((cat) => cat.category === activeCategory);

  const getBadgeClass = (level) => {
    switch (level) {
      case "Primary":
        return "badge-primary-skill";
      case "Hands-on":
        return "badge-handson-skill";
      case "Working Knowledge":
        return "badge-working-skill";
      default:
        return "badge-default-skill";
    }
  };

  return (
    <section className="section-wrapper skills-section" id="skills">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Technical Arsenal</span>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            Structured competencies categorized across programming, UI automation, API testing, database verification, and CI/CD.
          </p>
          <div className="section-divider"></div>
        </div>

        {/* Category Filter Pills */}
        <div className="skill-category-filters">
          <button
            type="button"
            className={`filter-tab ${activeCategory === "all" ? "active" : ""}`}
            onClick={() => setActiveCategory("all")}
          >
            All Skills
          </button>
          <button
            type="button"
            className={`filter-tab ${activeCategory === "programming" ? "active" : ""}`}
            onClick={() => setActiveCategory("programming")}
          >
            Programming
          </button>
          <button
            type="button"
            className={`filter-tab ${activeCategory === "automation" ? "active" : ""}`}
            onClick={() => setActiveCategory("automation")}
          >
            Test Automation
          </button>
          <button
            type="button"
            className={`filter-tab ${activeCategory === "api" ? "active" : ""}`}
            onClick={() => setActiveCategory("api")}
          >
            API & Backend
          </button>
          <button
            type="button"
            className={`filter-tab ${activeCategory === "cicd" ? "active" : ""}`}
            onClick={() => setActiveCategory("cicd")}
          >
            CI/CD & DevOps
          </button>
          <button
            type="button"
            className={`filter-tab ${activeCategory === "practices" ? "active" : ""}`}
            onClick={() => setActiveCategory("practices")}
          >
            Testing Practices
          </button>
        </div>

        {/* Legend */}
        <div className="skills-legend">
          <span className="legend-label">Proficiency Indicators:</span>
          <span className="legend-pill primary">Primary</span>
          <span className="legend-pill handson">Hands-on</span>
          <span className="legend-pill working">Working Knowledge</span>
        </div>

        {/* Categorized Skills Grid */}
        <div className="skills-categories-grid">
          {filteredCategories.map((cat, idx) => (
            <div className="skill-category-card" key={idx}>
              <div className="category-card-header">
                <span className="cat-icon">{cat.categoryIcon}</span>
                <h3 className="cat-title">{cat.categoryTitle}</h3>
                <span className="cat-count">{cat.skills.length} items</span>
              </div>

              <div className="skills-items-wrap">
                {cat.skills.map((skill, sIdx) => (
                  <div className="skill-chip" key={sIdx}>
                    <div className="skill-chip-left">
                      <span className="chip-icon">{skill.icon}</span>
                      <span className="chip-name">{skill.name}</span>
                    </div>
                    <span className={`chip-level ${getBadgeClass(skill.level)}`}>
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}