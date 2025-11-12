import "../Style/Navbar.css";
import {scroller } from "react-scroll";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleScroll = (target) => {
    if (location.pathname !== "/") {
      // Navigate to home first if on another route
      navigate("/");
      setTimeout(() => {
        scroller.scrollTo(target, {
          smooth: true,
          duration: 500,
          offset: -70,
        });
      }, 300);
    } else {
      // Already on home — just scroll
      scroller.scrollTo(target, {
        smooth: true,
        duration: 500,
        offset: -70,
      });
    }
  };

  return (
    <div className="constomcss">
      <nav className="navbar navbar-expand-lg container">
        <div className="container-fluid">
          <span
            className="navbar-brand"
            style={{ cursor: "pointer" }}
            onClick={() => handleScroll("home")}
          >
            Parth Patel
          </span>

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
                <span
                  className="nav-link"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleScroll("home")}
                >
                  {"<"}Home{"/>"}
                </span>
              </li>
            </ul>

            <div className="d-flex" role="search">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <span
                    className="nav-link"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleScroll("skill")}
                  >
                    {"<"}Skill{"/>"}
                  </span>
                </li>
                <li className="nav-item btnstyle">
                  <span
                    className="nav-link btncolor"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleScroll("Project")}
                  >
                    {"<"}Project{"/>"}
                  </span>
                </li>
                <li className="nav-item btnstyle">
                  <span
                    className="nav-link btncolor"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleScroll("certificate")}
                  >
                    {"<"}Certificate{"/>"}
                  </span>
                </li>
                <li className="nav-item btnstyle">
                  <span
                    className="nav-link btncolor"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleScroll("Experiance")}
                  >
                    {"<"}Experience{"/>"}
                  </span>
                </li>
                {/* Diary navigates to a separate route */}
                <li className="nav-item btnstyle">
                  <Link className="nav-link btncolor" to="/diary">
                    {"<"}Diary{"/>"}
                  </Link>
                </li>
                <li className="nav-item btnstyle">
                  <span
                    className="nav-link btncolor"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleScroll("Contect")}
                  >
                    {"<"}Contact{"/>"}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
