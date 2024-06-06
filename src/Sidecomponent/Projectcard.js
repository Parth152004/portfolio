// Projectcard.js

import React from "react";
import "../Style/Projectcard.css";

export default function Projectcard(props) {
  return (
    <div className="project-card" style={props.style}>
      <img src={props.image} alt={props.name} className="project-image" />
      <div className="project-details">
        <h3 className="project-name">{props.name}</h3>
        <p className="project-description">{props.description}</p>
        {props.need && (
          <a href={props.link} className="project-link">
            View Project
          </a>
        )}
      </div>
    </div>
  );
}
