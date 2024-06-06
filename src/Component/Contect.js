// Contact.js

import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaCodepen,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import "../Style/Contact.css";

export default function Contact() {
  return (
    <footer className="contact-container">
      <div className="contact-info">
        <h2 style={{ color: "#66FCF1" }}>Contact Me</h2>
        <ul>
          <li>
            <FaLinkedin className="social-icon" />{" "}
            <a href="https://www.linkedin.com/in/patelparth123/">LinkedIn</a>
          </li>
          <li>
            <FaGithub className="social-icon" />{" "}
            <a href="https://github.com/Parth152004/Parth152004">Github</a>
          </li>
          <li>
            <FaCodepen className="social-icon" />{" "}
            <a href="https://leetcode.com/u/parth0023/">Leetcode</a>
          </li>
          <li>
            <FaEnvelope className="social-icon" /> patelparth1167@gmail.com
          </li>
          <li>
            <FaPhone className="social-icon" /> +919428780513
          </li>
        </ul>
      </div>
    </footer>
  );
}
