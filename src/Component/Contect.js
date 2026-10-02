import React, { useState } from "react";
import "../Style/Contact.css";
import {
  FaLinkedin,
  FaGithub,
  FaCode,
  FaEnvelope,
  FaPhoneAlt,
  FaCheck,
  FaPaperPlane,
} from "react-icons/fa";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    try {
      if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText("patelparth1167@gmail.com");
      } else {
        const tempInput = document.createElement("input");
        tempInput.value = "patelparth1167@gmail.com";
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error("Clipboard copy error:", err);
    }
  };

  return (
    <footer className="section-wrapper contact-section" id="contact">
      <div className="container">
        <div className="contact-main-card">
          <div className="section-header">
            <span className="section-badge">Get In Touch</span>
            <h2 className="section-title">Let's Build Better Software</h2>
            <p className="section-subtitle">
              I'm open to QA Automation, Software Testing, and SDET opportunities where I can
              contribute to building reliable and maintainable automated testing solutions.
            </p>
            <div className="section-divider"></div>
          </div>

          <div className="row g-4 justify-content-center">
            {/* Contact Method 1: Email */}
            <div className="col-md-4 col-sm-6">
              <div className="contact-channel-card">
                <div className="channel-icon-wrap">
                  <FaEnvelope />
                </div>
                <h3 className="channel-title">Email</h3>
                <a
                  href="mailto:patelparth1167@gmail.com"
                  className="channel-value"
                >
                  patelparth1167@gmail.com
                </a>
                <button
                  type="button"
                  className="btn-copy-email"
                  onClick={copyEmail}
                >
                  {copied ? (
                    <>
                      <FaCheck className="me-1 text-success" /> Copied!
                    </>
                  ) : (
                    "Copy Address"
                  )}
                </button>
              </div>
            </div>

            {/* Contact Method 2: LinkedIn */}
            <div className="col-md-4 col-sm-6">
              <div className="contact-channel-card">
                <div className="channel-icon-wrap">
                  <FaLinkedin />
                </div>
                <h3 className="channel-title">LinkedIn</h3>
                <a
                  href="https://www.linkedin.com/in/patelparth123/"
                  target="_blank"
                  rel="noreferrer"
                  className="channel-value"
                >
                  linkedin.com/in/patelparth123
                </a>
                <a
                  href="https://www.linkedin.com/in/patelparth123/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-channel-action"
                >
                  Connect on LinkedIn <FaPaperPlane className="ms-1" />
                </a>
              </div>
            </div>

            {/* Contact Method 3: GitHub */}
            <div className="col-md-4 col-sm-6">
              <div className="contact-channel-card">
                <div className="channel-icon-wrap">
                  <FaGithub />
                </div>
                <h3 className="channel-title">GitHub</h3>
                <a
                  href="https://github.com/Parth152004"
                  target="_blank"
                  rel="noreferrer"
                  className="channel-value"
                >
                  github.com/Parth152004
                </a>
                <a
                  href="https://github.com/Parth152004"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-channel-action"
                >
                  View Repositories <FaPaperPlane className="ms-1" />
                </a>
              </div>
            </div>
          </div>

          {/* Secondary Details Row */}
          <div className="contact-extra-row">
            <div className="extra-item">
              <FaPhoneAlt className="extra-icon" />
              <span>+91 94287 80513</span>
            </div>
            <span className="extra-sep">•</span>
            <div className="extra-item">
              <FaCode className="extra-icon" />
              <a
                href="https://leetcode.com/u/parth0023/"
                target="_blank"
                rel="noreferrer"
                className="extra-link"
              >
                LeetCode Profile (parth0023)
              </a>
            </div>
          </div>
        </div>

        {/* Footer Copyright */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            © {new Date().getFullYear()} Parth Patel · QA Automation Engineer · All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
