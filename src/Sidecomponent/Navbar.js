import React from "react";
import "../Style/Navbar.css";
import { Link as ScrollLink } from "react-scroll";

export default function Navbar() {
  return (
    <div className="constomcss">
      <nav className="navbar navbar-expand-lg  container ">
        <div className="container-fluid">
          <ScrollLink
            className="navbar-brand"
            to="home"
            smooth={true}
            duration={500}
          >
            Parth Patel
          </ScrollLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item homebtn">
                <ScrollLink
                  className="nav-link"
                  to="home"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-70} // Adjust as needed based on your navbar height
                >
                  {"<"}Home{"/>"}
                </ScrollLink>
              </li>
            </ul>
            <div className="d-flex" role="search">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <ScrollLink
                    className="nav-link"
                    to="skill"
                    smooth={true}
                    duration={500}
                  >
                    {"<"}Skill{"/>"}
                  </ScrollLink>
                </li>
                <li className="nav-item btnstyle">
                  <ScrollLink
                    className="nav-link  btncolor"
                    to="Project"
                    smooth={true}
                    duration={500}
                  >
                    {"<"}Project{"/>"}
                  </ScrollLink>
                </li>
                <li className="nav-item btnstyle">
                  <ScrollLink
                    className="nav-link  btncolor"
                    to="certificate"
                    smooth={true}
                    duration={500}
                  >
                    {"<"}Certificate{"/>"}
                  </ScrollLink>
                </li>
                <li className="nav-item btnstyle">
                  <ScrollLink
                    className="nav-link  btncolor"
                    to="Experiance"
                    smooth={true}
                    duration={500}
                  >
                    {"<"}Experience{"/>"}
                  </ScrollLink>
                </li>
                <li className="nav-item btnstyle">
                  <ScrollLink
                    className="nav-link  btncolor"
                    to="Contect"
                    smooth={true}
                    duration={500}
                  >
                    {"<"}Contact{"/>"}
                  </ScrollLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
