import "./App.css";
import Home from "./Component/Home";
import Skill from "./Component/Skill";
import Navbar from "./Sidecomponent/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import Project from "./Component/Project";
import Certificate from "./Component/Certificate";
import Experience from "./Component/Experiance";
import Contect from "./Component/Contect";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dairy from "./Component/Dairy/Dairy";
import DiaryEntryDetail from "./Component/Dairy/DiaryEntryDetail";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div id="home" className="section"><Home /></div>
              <div id="skill" className="section"><Skill /></div>
              <div id="Project" className="section"><Project /></div>
              <div id="certificate" className="section"><Certificate /></div>
              <div id="Experiance" className="section"><Experience /></div>
              <div id="Contect" className="section"><Contect /></div>
            </>
          }
        />
        <Route path="/diary" element={<Dairy />} />
        <Route path="/diary/:id" element={<DiaryEntryDetail />} />
      </Routes>
    </Router>
  );
}

export default App;