import "./App.css";
import Home from "./Component/Home";
import Skill from "./Component/Skill";
import Navbar from "./Sidecomponent/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import Project from "./Component/Project";
import Certificate from "./Component/Certificate";
import Experience from "./Component/Experiance";
import Contect from "./Component/Contect"

function App() {
  return (
    <div>
      <Navbar />
      <div id="home" className="section">
        <Home />
      </div>
      <div id="skill" className="section">
        <Skill />
      </div>
      <div id="Project" className="section">
        <Project />
      </div>
      <div id="certificate" className="section">
        <Certificate />
      </div>
      <div id="Experiance" className="section">
        <Experience />
      </div>
      <div id="Contect" className="section">
       <Contect/>
      </div>
    </div>
  );
}

export default App;
