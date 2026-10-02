import React, { useState, useEffect, useRef } from "react";
import "../Style/Navbar.css";
import { scroller } from "react-scroll";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaFileDownload,
  FaBars,
  FaTimes,
  FaVial,
  FaEye,
  FaEyeSlash,
  FaPalette,
  FaChevronDown,
} from "react-icons/fa";

const THEMES = [
  { id: "warm-amber", name: "Warm Amber", dot: "#e5a950" },
  { id: "emerald-sage", name: "Emerald Sage", dot: "#34d399" },
  { id: "terracotta-sunset", name: "Terracotta", dot: "#f97316" },
  { id: "minimal-slate", name: "Nordic Silver", dot: "#e2e8f0" },
  { id: "midnight-azure", name: "Midnight Azure", dot: "#38bdf8" },
];

export default function Navbar({
  qaInspectorMode,
  setQaInspectorMode,
  currentTheme = "warm-amber",
  setCurrentTheme,
}) {
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScrollEvent = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScrollEvent);
    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setThemeDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavClick = (target) => {
    setMobileMenuOpen(false);
    if (!isHomePage) {
      navigate("/");
      setTimeout(() => {
        scroller.scrollTo(target, {
          smooth: true,
          duration: 500,
          offset: -80,
        });
      }, 250);
    } else {
      scroller.scrollTo(target, {
        smooth: true,
        duration: 500,
        offset: -80,
      });
    }
  };

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "./Parth_Patel_QA_Automation_Resume.pdf";
    link.download = "Parth_Patel_QA_Automation_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const activeThemeObj = THEMES.find((t) => t.id === currentTheme) || THEMES[0];

  return (
    <header
      className={`custom-navbar-wrapper ${isScrolled ? "scrolled" : ""}`}
      data-testid="main-navbar"
    >
      <div className="container nav-container">
        {/* Brand Logo */}
        <div className="nav-brand" onClick={() => handleNavClick("home")}>
          <span className="brand-name">Parth Patel</span>
          <span className="brand-badge">QA Automation</span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            <li>
              <button
                type="button"
                className="nav-btn-link"
                onClick={() => handleNavClick("home")}
              >
                Home
              </button>
            </li>
            <li>
              <button
                type="button"
                className="nav-btn-link"
                onClick={() => handleNavClick("about")}
              >
                About
              </button>
            </li>
            <li>
              <button
                type="button"
                className="nav-btn-link"
                onClick={() => handleNavClick("playground")}
              >
                <FaVial className="nav-inline-icon me-1" /> Sandbox
              </button>
            </li>
            <li>
              <button
                type="button"
                className="nav-btn-link"
                onClick={() => handleNavClick("skills")}
              >
                Skills
              </button>
            </li>
            <li>
              <button
                type="button"
                className="nav-btn-link"
                onClick={() => handleNavClick("experience")}
              >
                Experience
              </button>
            </li>
            <li>
              <button
                type="button"
                className="nav-btn-link"
                onClick={() => handleNavClick("projects")}
              >
                Projects
              </button>
            </li>
            <li>
              <button
                type="button"
                className="nav-btn-link"
                onClick={() => handleNavClick("automation")}
              >
                Automation
              </button>
            </li>
            <li>
              <button
                type="button"
                className="nav-btn-link"
                onClick={() => handleNavClick("certificate")}
              >
                Certificates
              </button>
            </li>
            <li>
              <button
                type="button"
                className="nav-btn-link"
                onClick={() => handleNavClick("contact")}
              >
                Contact
              </button>
            </li>
          </ul>

          {/* Action CTAs */}
          <div className="nav-actions">
            {/* Theme Selector Dropdown */}
            <div className="theme-picker-wrapper" ref={dropdownRef}>
              <button
                type="button"
                className="btn-theme-trigger"
                onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
                title="Change UI Theme"
              >
                <span
                  className="theme-dot"
                  style={{ backgroundColor: activeThemeObj.dot }}
                />
                <FaPalette className="ms-1" />
                <span className="d-none d-xl-inline">{activeThemeObj.name}</span>
                <FaChevronDown style={{ fontSize: "0.65rem", marginLeft: 4 }} />
              </button>

              {themeDropdownOpen && (
                <div className="theme-dropdown-menu">
                  {THEMES.map((theme) => (
                    <button
                      key={theme.id}
                      type="button"
                      className={`theme-option-btn ${
                        currentTheme === theme.id ? "active" : ""
                      }`}
                      onClick={() => {
                        if (setCurrentTheme) setCurrentTheme(theme.id);
                        setThemeDropdownOpen(false);
                      }}
                    >
                      <span
                        className="theme-dot"
                        style={{ backgroundColor: theme.dot }}
                      />
                      <span>{theme.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* QA Inspector Mode Toggle */}
            <button
              type="button"
              className={`btn-qa-toggle ${qaInspectorMode ? "active" : ""}`}
              onClick={() => setQaInspectorMode(!qaInspectorMode)}
              title="Toggle QA Test Locators Inspector View"
            >
              {qaInspectorMode ? (
                <FaEye className="me-1" />
              ) : (
                <FaEyeSlash className="me-1" />
              )}
              <span>{qaInspectorMode ? "QA Mode ON" : "QA Mode"}</span>
            </button>

            {/* Direct Resume Download */}
            <button
              type="button"
              className="btn-nav-cta"
              onClick={handleResumeDownload}
              title="Download Parth Patel Resume"
            >
              <FaFileDownload className="me-1" /> Resume
            </button>
          </div>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          className="mobile-toggle-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Backdrop Overlay */}
      {mobileMenuOpen && (
        <div
          className="mobile-backdrop-overlay"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Drawer Menu */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? "open" : ""}`}>
        <ul className="mobile-nav-list">
          <li>
            <button
              type="button"
              className="mobile-nav-link"
              onClick={() => handleNavClick("home")}
            >
              Home
            </button>
          </li>
          <li>
            <button
              type="button"
              className="mobile-nav-link"
              onClick={() => handleNavClick("about")}
            >
              About
            </button>
          </li>
          <li>
            <button
              type="button"
              className="mobile-nav-link"
              onClick={() => handleNavClick("playground")}
            >
              <FaVial className="me-2" /> Live Test Sandbox
            </button>
          </li>
          <li>
            <button
              type="button"
              className="mobile-nav-link"
              onClick={() => handleNavClick("skills")}
            >
              Skills
            </button>
          </li>
          <li>
            <button
              type="button"
              className="mobile-nav-link"
              onClick={() => handleNavClick("experience")}
            >
              Experience
            </button>
          </li>
          <li>
            <button
              type="button"
              className="mobile-nav-link"
              onClick={() => handleNavClick("projects")}
            >
              Projects
            </button>
          </li>
          <li>
            <button
              type="button"
              className="mobile-nav-link"
              onClick={() => handleNavClick("automation")}
            >
              Automation Framework
            </button>
          </li>
          <li>
            <button
              type="button"
              className="mobile-nav-link"
              onClick={() => handleNavClick("certificate")}
            >
              Certificates
            </button>
          </li>
          <li>
            <button
              type="button"
              className="mobile-nav-link"
              onClick={() => handleNavClick("resume")}
            >
              Resume
            </button>
          </li>
          <li>
            <button
              type="button"
              className="mobile-nav-link"
              onClick={() => handleNavClick("contact")}
            >
              Contact
            </button>
          </li>

          {/* Theme Switcher on Mobile */}
          <li className="pt-2">
            <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase", paddingLeft: "12px", letterSpacing: "0.05em" }}>Choose Theme</span>
            <div className="mobile-theme-selector">
              {THEMES.map((theme) => (
                <button
                  key={theme.id}
                  type="button"
                  className={`mobile-theme-btn ${
                    currentTheme === theme.id ? "active" : ""
                  }`}
                  onClick={() => {
                    if (setCurrentTheme) setCurrentTheme(theme.id);
                    setMobileMenuOpen(false);
                  }}
                >
                  <span
                    className="theme-dot me-1"
                    style={{ backgroundColor: theme.dot, display: "inline-block" }}
                  />
                  {theme.name}
                </button>
              ))}
            </div>
          </li>

          {/* QA Mode Toggle on Mobile */}
          <li className="pt-2">
            <button
              type="button"
              className={`mobile-nav-link qa-toggle-mobile ${
                qaInspectorMode ? "active" : ""
              }`}
              onClick={() => setQaInspectorMode(!qaInspectorMode)}
            >
              {qaInspectorMode ? (
                <FaEye className="me-2" />
              ) : (
                <FaEyeSlash className="me-2" />
              )}
              {qaInspectorMode
                ? "QA Inspector Mode (Enabled)"
                : "Enable QA Inspector Mode"}
            </button>
          </li>

          <li className="mobile-apps-divider">
            <span>Extra Portfolio Apps</span>
          </li>
          <li>
            <Link
              to="/diary"
              className="mobile-nav-link subapp-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Digital Diary
            </Link>
          </li>
          <li>
            <Link
              to="/viewMyBooking"
              className="mobile-nav-link subapp-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Machine Booking
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
