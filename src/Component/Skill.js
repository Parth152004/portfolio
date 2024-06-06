import React, { useEffect } from "react";
import Skillcard from "../Sidecomponent/Skillcard";
import "../Style/Skill.css";

export default function Skill() {
  useEffect(() => {
    const skillCards = document.querySelectorAll(".Skillcontainer");
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
          observer.unobserve(entry.target); // Stop observing once the animation is applied
        }
      });
    }, observerOptions);

    skillCards.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      skillCards.forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, []);

  return (
    <div className="backcolor">
      <div className="container">
        <h1>Skill</h1>
        <hr />
        <div className="skill-container">
          <Skillcard image="./Skillimage/HTML.png" name="HTML" />
          <Skillcard image="./Skillimage/CSS.png" name="CSS" />
          <Skillcard image="./Skillimage/Javascript.jpeg" name="JavaScript" />
          <Skillcard image="./Skillimage/ReactJs.png" name="ReactJs" />
          <Skillcard image="./Skillimage/Nodejs.png" name="NodeJs" />
          <Skillcard image="./Skillimage/Mongodb.jpeg" name="MongoDB" />
          <Skillcard image="./Skillimage/SpringBoot.png" name="Spring Boot" />
          <Skillcard image="./Skillimage/Bootstrap.jpeg" name="Bootstrap" />
        </div>
      </div>
    </div>
  );
}
