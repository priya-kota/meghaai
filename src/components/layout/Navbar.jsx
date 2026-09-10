import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

import "../../styles/navbar.css";
import logo from "../../assets/MeghaAI_Header1.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  /* =====================================
     PREVENT BACKGROUND SCROLL
     WHEN MOBILE MENU IS OPEN
  ===================================== */

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  /* =====================================
     CLOSE MOBILE MENU
  ===================================== */

  const closeMenu = () => {
    setMenuOpen(false);
  };

  /* =====================================
     CLOSE ABOUT DROPDOWN
  ===================================== */

  const closeAboutDropdown = () => {
    setAboutOpen(false);
  };

  /* =====================================
     HANDLE DROPDOWN LINK CLICK
     
     Closes dropdown immediately before
     navigating to the selected page.
  ===================================== */

  const handleAboutLinkClick = () => {
    setAboutOpen(false);
    setMenuOpen(false);
  };

  return (
    <>
      {/* =====================================
          DESKTOP / TABLET NAVBAR
      ===================================== */}

      <header className="navbar-wrapper">

        {/* =====================================
            LOGO
        ===================================== */}

        <Link
          to="/"
          className="navbar-brand"
          onClick={() => {
            closeMenu();
            closeAboutDropdown();
          }}
          aria-label="MeghaAI home"
        >
          <img
            src={logo}
            className="navbar-logo"
            alt="MeghaAI"
          />
        </Link>

        {/* =====================================
            DESKTOP NAVIGATION
        ===================================== */}

        <nav
          className="nav-links"
          aria-label="Main navigation"
        >

          {/* =====================================
              HOME
          ===================================== */}

          <Link
            to="/"
            className="nav-btn"
            onClick={() => {
              closeMenu();
              closeAboutDropdown();
            }}
          >
            Home
          </Link>


          {/* =====================================
              PLATFORM
              Route: /solutions — UNCHANGED
          ===================================== */}

          <Link
            to="/solutions"
            className="nav-btn"
            onClick={() => {
              closeMenu();
              closeAboutDropdown();
            }}
          >
            Platform
          </Link>


          {/* =====================================
              SOLUTIONS
              Route: /products — UNCHANGED
          ===================================== */}

          <Link
            to="/products"
            className="nav-btn"
            onClick={() => {
              closeMenu();
              closeAboutDropdown();
            }}
          >
            Solutions
          </Link>


          {/* =====================================
              INDUSTRIES
          ===================================== */}

          <Link
            to="/industries"
            className="nav-btn"
            onClick={() => {
              closeMenu();
              closeAboutDropdown();
            }}
          >
            Industries
          </Link>


          {/* =====================================
              ABOUT US DROPDOWN
          ===================================== */}

          <div
            className={`nav-dropdown ${
              aboutOpen ? "is-open" : ""
            }`}
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >

            {/* =================================
                ABOUT US TRIGGER
            ================================= */}

            <Link
              to="/overview"
              className="nav-btn nav-dropdown-trigger"
              onClick={() => {
                setAboutOpen(false);
                closeMenu();
              }}
              aria-haspopup="true"
              aria-expanded={aboutOpen}
            >
              About Us

              <span
                className="nav-dropdown-arrow"
                aria-hidden="true"
              >
                ▾
              </span>
            </Link>


            {/* =================================
                ABOUT US DROPDOWN MENU
            ================================= */}

            <div
              className="nav-dropdown-menu"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >

              {/* =================================
                  OVERVIEW
              ================================= */}

              <NavLink
                to="/overview"
                onClick={handleAboutLinkClick}
                className={({ isActive }) =>
                  isActive ? "active" : ""
                }
              >
                Overview
              </NavLink>


              {/* =================================
                  LEADERSHIP
              ================================= */}

              <NavLink
                to="/leadership"
                onClick={handleAboutLinkClick}
                className={({ isActive }) =>
                  isActive ? "active" : ""
                }
              >
                Leadership
              </NavLink>


              {/* =================================
                  BLOGS
                  Currently disabled
              ================================= */}

              {/*
              <NavLink
                to="/blogs"
                onClick={handleAboutLinkClick}
                className={({ isActive }) =>
                  isActive ? "active" : ""
                }
              >
                Blogs
              </NavLink>
              */}


              {/* =================================
                  CONTACT
              ================================= */}

              <NavLink
                to="/contact"
                onClick={handleAboutLinkClick}
                className={({ isActive }) =>
                  isActive ? "active" : ""
                }
              >
                Contact
              </NavLink>

            </div>
          </div>
        </nav>


        {/* =====================================
            TALK TO SALES
        ===================================== */}

        <Link
          to="/contact"
          className="navbar-talk-sales"
          onClick={() => {
            closeMenu();
            closeAboutDropdown();
          }}
        >
          Talk to Sales
        </Link>


        {/* =====================================
            HAMBURGER
        ===================================== */}

        <button
          type="button"
          className="hamburger"
          onClick={() => {
            setAboutOpen(false);
            setMenuOpen(true);
          }}
          aria-label="Open navigation menu"
          aria-expanded={menuOpen}
        >
          ☰
        </button>

      </header>


      {/* =====================================
          MOBILE OVERLAY
      ===================================== */}

      <div
        className={`mobile-overlay ${
          menuOpen ? "active" : ""
        }`}
        onClick={closeMenu}
        aria-hidden="true"
      />


      {/* =====================================
          MOBILE SIDE MENU
      ===================================== */}

      <nav
        className={`mobile-menu ${
          menuOpen ? "active" : ""
        }`}
        aria-label="Mobile navigation"
      >

        {/* =====================================
            MOBILE HOME
        ===================================== */}

        <Link
          to="/"
          onClick={closeMenu}
        >
          Home
        </Link>


        {/* =====================================
            MOBILE PLATFORM
            Route remains /solutions
        ===================================== */}

        <Link
          to="/solutions"
          onClick={closeMenu}
        >
          Platform
        </Link>


        {/* =====================================
            MOBILE SOLUTIONS
            Route remains /products
        ===================================== */}

        <Link
          to="/products"
          onClick={closeMenu}
        >
          Solutions
        </Link>


        {/* =====================================
            MOBILE INDUSTRIES
        ===================================== */}

        <Link
          to="/industries"
          onClick={closeMenu}
        >
          Industries
        </Link>


        {/* =====================================
            MOBILE ABOUT US
        ===================================== */}

        <div className="mobile-about-group">

          <Link
            to="/overview"
            onClick={closeMenu}
            className="mobile-about-title"
          >
            About Us

            <span
              className="nav-dropdown-arrow"
              aria-hidden="true"
            >
              ▾
            </span>
          </Link>


          {/* =================================
              ABOUT US SUBMENU
          ================================= */}

          <div className="mobile-about-links">

            <Link
              to="/overview"
              onClick={closeMenu}
            >
              Overview
            </Link>

            <Link
              to="/leadership"
              onClick={closeMenu}
            >
              Leadership
            </Link>

            {/*

            <Link
              to="/blogs"
              onClick={closeMenu}
            >
              Blogs
            </Link>

            */}

            <Link
              to="/contact"
              onClick={closeMenu}
            >
              Contact
            </Link>

          </div>

        </div>

      </nav>
    </>
  );
}

export default Navbar;