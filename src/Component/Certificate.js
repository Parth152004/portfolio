import React, { useState, useEffect } from "react";
import "../Style/Certificate.css";
import {
  FaCertificate,
  FaTimes,
  FaExternalLinkAlt,
  FaSearchPlus,
  FaAward,
  FaCheckCircle,
  FaAws,
} from "react-icons/fa";
import { SiOpenjdk } from "react-icons/si";

export default function Certificate() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedCert(null);
      }
    };
    if (selectedCert) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedCert]);

  const certificates = [
    {
      id: "aws",
      image: "./Certificate/AWS.png",
      name: "AWS Academy Graduate - Cloud Foundations",
      issuer: "Amazon Web Services (AWS)",
      category: "cloud",
      icon: <FaAws />,
      badgeColor: "cyan",
      date: "Certified Graduate",
      description:
        "Comprehensive validation of cloud computing concepts, core AWS architectural principles, security compliance, compute/storage services, and global cloud infrastructure.",
      skills: ["Cloud Architecture", "AWS S3 / EC2", "Cloud Security", "Identity & Access Management"],
    },
    {
      id: "dsa",
      image: "./Certificate/DSA.jpeg",
      name: "Java with Data Structures & Algorithms",
      issuer: "Technical Training Program",
      category: "programming",
      icon: <SiOpenjdk />,
      badgeColor: "indigo",
      date: "Verified Completion",
      description:
        "Rigorous training in Core Java programming, Object-Oriented Programming (OOP) paradigms, algorithmic efficiency (Time/Space complexity), arrays, trees, and linked structures.",
      skills: ["Core Java", "OOP Principles", "Data Structures", "Algorithm Optimization"],
    },
    {
      id: "ml",
      image: "./Certificate/ML.jpeg",
      name: "Machine Learning Course Certification",
      issuer: "Machine Learning Academy",
      category: "ai",
      icon: <FaAward />,
      badgeColor: "purple",
      date: "Verified Completion",
      description:
        "Supervised and unsupervised machine learning algorithms, model training pipelines, dataset cross-validation, and classification accuracy analysis.",
      skills: ["Model Evaluation", "Classification", "Feature Engineering", "Data Analytics"],
    },
    {
      id: "gtsd",
      image: "./Certificate/GTSD.jpeg",
      name: "GTSD-2024 Research Presentation",
      issuer: "International Conference on GTSD",
      category: "ai",
      icon: <FaCertificate />,
      badgeColor: "amber",
      date: "Conference 2024",
      description:
        "Presented academic research on Deep Learning for Crop Disease Classification at the International Conference on Green Technology & Sustainable Development (GTSD-2024).",
      skills: ["Academic Research", "Technical Presentation", "Computer Vision", "Model Validation"],
    },
    {
      id: "intershala",
      image: "./Certificate/Intershalaweb.jpeg",
      name: "Full Stack Development Program",
      issuer: "Internshala Training",
      category: "web",
      icon: <FaCertificate />,
      badgeColor: "teal",
      date: "Certified Training",
      description:
        "Full stack software architecture, REST API design and integration, client-server communication, backend databases, and modern UI engineering.",
      skills: ["RESTful APIs", "Full Stack Lifecycle", "Client-Server Sync", "Database Integration"],
    },
  ];

  const filteredCerts =
    activeFilter === "all"
      ? certificates
      : certificates.filter((c) => c.category === activeFilter);

  return (
    <section className="section-wrapper certificate-section" id="certificate" data-testid="section-certificates">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">
            <FaAward className="me-1" /> Verified Credentials
          </span>
          <h2 className="section-title">Certifications & Honors</h2>
          <p className="section-subtitle">
            Formal technical certifications validating cloud infrastructure, Java foundations, and software development practices.
          </p>
          <div className="section-divider"></div>
        </div>

        {/* Category Filter Pills */}
        <div className="cert-filters-wrap">
          <button
            type="button"
            className={`cert-filter-btn ${activeFilter === "all" ? "active" : ""}`}
            onClick={() => setActiveFilter("all")}
          >
            All Certifications ({certificates.length})
          </button>
          <button
            type="button"
            className={`cert-filter-btn ${activeFilter === "cloud" ? "active" : ""}`}
            onClick={() => setActiveFilter("cloud")}
          >
            Cloud (AWS)
          </button>
          <button
            type="button"
            className={`cert-filter-btn ${activeFilter === "programming" ? "active" : ""}`}
            onClick={() => setActiveFilter("programming")}
          >
            Java & DSA
          </button>
          <button
            type="button"
            className={`cert-filter-btn ${activeFilter === "ai" ? "active" : ""}`}
            onClick={() => setActiveFilter("ai")}
          >
            AI & Research
          </button>
          <button
            type="button"
            className={`cert-filter-btn ${activeFilter === "web" ? "active" : ""}`}
            onClick={() => setActiveFilter("web")}
          >
            Full Stack Web
          </button>
        </div>

        {/* Responsive Grid Layout */}
        <div className="certificates-responsive-grid">
          {filteredCerts.map((cert) => (
            <div
              className={`cert-grid-card border-badge-${cert.badgeColor}`}
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
            >
              <div className="cert-card-media">
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="cert-card-img"
                  loading="lazy"
                />
                <div className="cert-card-overlay">
                  <span className="btn-preview-cert">
                    <FaSearchPlus className="me-2" /> Inspect Certificate
                  </span>
                </div>
                <span className={`cert-type-pill pill-${cert.badgeColor}`}>
                  {cert.issuer}
                </span>
              </div>

              <div className="cert-card-content">
                <div className="cert-meta-row">
                  <span className="cert-issuer-text">{cert.issuer}</span>
                  <span className="cert-date-text">{cert.date}</span>
                </div>

                <h3 className="cert-title-text">{cert.name}</h3>
                <p className="cert-desc-text">{cert.description}</p>

                <div className="cert-skills-pills">
                  {cert.skills.slice(0, 3).map((skill, sIdx) => (
                    <span className="skill-pill-item" key={sIdx}>
                      <FaCheckCircle className="pill-check" /> {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="cert-card-action-bar">
                <span className="cert-action-prompt">
                  Click to View Full Size <FaExternalLinkAlt className="ms-1" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedCert && (
        <div
          className="cert-lightbox-modal"
          onClick={() => setSelectedCert(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="cert-lightbox-dialog"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="cert-close-btn"
              onClick={() => setSelectedCert(null)}
              aria-label="Close Certificate Modal"
            >
              <FaTimes />
            </button>

            <div className="row g-0 align-items-center">
              <div className="col-lg-7 cert-modal-image-col">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.name}
                  className="cert-modal-full-img"
                />
              </div>

              <div className="col-lg-5 cert-modal-details-col">
                <span className={`cert-modal-badge badge-${selectedCert.badgeColor}`}>
                  {selectedCert.issuer}
                </span>

                <h3 className="cert-modal-title">{selectedCert.name}</h3>
                <p className="cert-modal-meta">
                  <strong>Status:</strong> {selectedCert.date}
                </p>

                <p className="cert-modal-description">
                  {selectedCert.description}
                </p>

                <h4 className="cert-modal-skills-heading">Validated Competencies:</h4>
                <div className="cert-modal-skills-wrap">
                  {selectedCert.skills.map((skill, sIdx) => (
                    <span className="modal-skill-tag" key={sIdx}>
                      <FaCheckCircle className="modal-check" /> {skill}
                    </span>
                  ))}
                </div>

                <div className="cert-modal-actions mt-4">
                  <a
                    href={selectedCert.image}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-cert-open-tab"
                  >
                    Open Full Image in New Tab <FaExternalLinkAlt className="ms-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
