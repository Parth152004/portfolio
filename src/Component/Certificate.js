import React from "react";
import Projectcard from "../Sidecomponent/Projectcard";

export default function Certificate() {
  return (
    <div className="backcolor">
      <div className="container">
        <h1>Certificate</h1>
        <hr />
        <div className="project-container">
          <Projectcard
            image={"./Certificate/AWS.png"}
            name={"AWS Academy Graduate - AWS Academy Cloud Foundations."}
            description={""}
            link={""}
            need={false}
            style={{width:"350px",height:"400px"}}
          />
          <Projectcard
            image={"./Certificate/GTSD.jpeg"}
            name={
              "Participating and presenting the research work in international conference on GTSD-2024."
            }
            description={""}
            link={""}
            need={false}
            style={{width:"350px",height:"400px"}}
          />
          <Projectcard
            image={"./Certificate/Intershalaweb.jpeg"}
            name={
              "Internshala Webdevlopment Traning Program for full stack Devlopment."
            }
            description={""}
            link={""}
            need={false}
            style={{width:"350px",height:"400px"}}
          />
          <Projectcard
            image={"./Certificate/DSA.jpeg"}
            name={"Java with DSA"}
            description={""}
            link={""}
            need={false}
            style={{width:"350px",height:"400px"}}
          />
          <Projectcard
            image={"./Certificate/ML.jpeg"}
            name={"Machine Learning Course"}
            description={""}
            link={""}
            need={false}
            style={{width:"350px",height:"400px"}}
          />
        </div>
      </div>
    </div>
  );
}
