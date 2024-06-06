import React from "react";
import Projectcard from "../Sidecomponent/Projectcard";
import "../Style/Project.css";

export default function Project() {
  return (
    <div className="backcolor">
      <div className="container">
        <h1>Projects</h1>
        <hr />
        <div className="project-container">
          <Projectcard
            image={"./Projectimage/Tomato_project.png"}
            name={"Tomato Leaf Disease Detection"}
            description={
              "Developed a user-friendly website to empower farmers with early detection of tomato leaf diseases. This web application leverages machine learning (87% accuracy with reinforcement learning) to analyze uploaded images and identify potential problems. Built the front-end using React and MongoDB, while the back-end utilizes Python and Django for model creation and connection. Additionally, the project utilizes AWS for secure image storage."
            }
            link={
              "https://github.com/itsunilvithlani/2024_G2_Crop-Disease-Classification/tree/frontend"
            }
            need={true}
          />
          <Projectcard
            image={"./Projectimage/Movie_review.png"}
            name={"Movie ReviewSite"}
            description={
              "Developed a dynamic online platform for movie enthusiasts to share reviews and discover new films. Users can contribute movie entries, providing details and sparking discussions. Additionally, viewers can submit personalized reviews, fostering a vibrant community around film appreciation. The platform utilizes React for a user-friendly interface, while MySQL and Spring Boot power the back-end database and functionalities."
            }
            link={"https://github.com/Parth152004/Review-website"}
            need={true}
          />
          <Projectcard
            image={"./Projectimage/Fooddelever.png"}
            name={"Ahharmandir"}
            description={
              "Developed a mobile application that empowers users to explore and discover delicious dining options. The app leverages the MERN stack (MongoDB, Express.js, React.js, Node.js) for a user-friendly experience. Users can search for restaurants menus, and potentially even place orders (depending on the app's functionality)."
            }
            link={""}
            need={true}
          />
        </div>
      </div>
    </div>
  );
}
