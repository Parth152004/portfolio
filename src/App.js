import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Sidecomponent/Navbar";
import Home from "./Component/Home";
import About from "./Component/About";
import TestPlayground from "./Component/TestPlayground";
import TestingExpertise from "./Component/TestingExpertise";
import Skill from "./Component/Skill";
import AutomationFramework from "./Component/AutomationFramework";
import Experience from "./Component/Experiance";
import Project from "./Component/Project";
import Certificate from "./Component/Certificate";
import Resume from "./Component/Resume";
import Contact from "./Component/Contect";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dairy from "./Component/Dairy/Dairy";
import DiaryEntryDetail from "./Component/Dairy/DiaryEntryDetail";
import CreateNewDiary from "./Component/Dairy/CreateNewDiary";
import ViewMyBooking from "./Component/MachineBooking/ViewMyBooking";
import BookMachine from "./Component/MachineBooking/BookMachine";

function App() {
  const [qaInspectorMode, setQaInspectorMode] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(() => {
    return localStorage.getItem("portfolio-theme") || "warm-amber";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", currentTheme);
    localStorage.setItem("portfolio-theme", currentTheme);
  }, [currentTheme]);

  return (
    <Router>
      <div className={`app-root-container ${qaInspectorMode ? "qa-inspector-mode" : ""}`}>
        <Navbar
          qaInspectorMode={qaInspectorMode}
          setQaInspectorMode={setQaInspectorMode}
          currentTheme={currentTheme}
          setCurrentTheme={setCurrentTheme}
        />
        <Routes>
          <Route
            path="/"
            element={
              <main className="main-content-flow">
                <div id="home" className="section" data-testid="page-hero">
                  <Home />
                </div>
                <div id="about" className="section" data-testid="page-about">
                  <About />
                </div>
                {/* Live Interactive QA Test Sandbox */}
                <div id="playground" className="section" data-testid="page-playground">
                  <TestPlayground />
                </div>
                <div id="expertise" className="section" data-testid="page-expertise">
                  <TestingExpertise />
                </div>
                <div id="skills" className="section" data-testid="page-skills">
                  <Skill />
                </div>
                <div id="automation" className="section" data-testid="page-automation">
                  <AutomationFramework />
                </div>
                <div id="experience" className="section" data-testid="page-experience">
                  <Experience />
                </div>
                <div id="projects" className="section" data-testid="page-projects">
                  <Project />
                </div>
                <div id="certificate" className="section" data-testid="page-certificates">
                  <Certificate />
                </div>
                <div id="resume" className="section" data-testid="page-resume">
                  <Resume />
                </div>
                <div id="contact" className="section" data-testid="page-contact">
                  <Contact />
                </div>
              </main>
            }
          />
          {/* Preserved Sub-Application Routes */}
          <Route path="/diary" element={<Dairy />} />
          <Route path="/diary/:id" element={<DiaryEntryDetail />} />
          <Route path="/diary/new" element={<CreateNewDiary />} />
          <Route path="/viewMyBooking" element={<ViewMyBooking />} />
          <Route path="/booking" element={<BookMachine />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;