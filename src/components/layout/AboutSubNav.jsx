import { NavLink } from "react-router-dom";
import "../../styles/about-subnav.css";

function AboutSubNav() {
  return (
    <nav className="about-subnav" aria-label="About Us Secondary Navigation">
      <div className="about-subnav-container">
        <ul className="about-subnav-list">
          <li>
            <NavLink
              to="/overview"
              className={({ isActive }) =>
                isActive ? "about-subnav-link active" : "about-subnav-link"
              }
            >
              Overview
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/leadership"
              className={({ isActive }) =>
                isActive ? "about-subnav-link active" : "about-subnav-link"
              }
            >
              Leadership
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                isActive ? "about-subnav-link active" : "about-subnav-link"
              }
            >
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "about-subnav-link active" : "about-subnav-link"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default AboutSubNav;
