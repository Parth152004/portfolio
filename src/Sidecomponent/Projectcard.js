import React from "react";
import "../Style/Projectcard.css";
import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";

export default function Projectcard(props) {
  return (
    <div className="project-card" style={props.style}>
      <div className="card-image-container">
        <img src={props.image} alt={props.name} className="project-image" />
        <span className="card-type-badge">
          {props.type || (props.need ? "Project" : "Certificate")}
        </span>
      </div>
      <div className="project-details">
        {props.issuer && <span className="issuer-tag">{props.issuer}</span>}
        <h3 className="project-name">{props.name}</h3>
        {props.description && (
          <p className="project-description">{props.description}</p>
        )}
        {props.need && props.link && (
          <a
            href={props.link}
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            View Project <FaExternalLinkAlt className="ms-1" />
          </a>
        )}
      </div>
    </div>
  );
}
