import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookieConsent } from "../../hooks/useCookieConsent";

import footerLogo from "../../assets/MeghaAI_Footer2.png";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

import "../../styles/footer.css";

const Footer = () => {
  const navigate = useNavigate();
  const { openPreferences } = useCookieConsent();

  const [comingSoon, setComingSoon] = useState(null);

  const handleComingSoon = (platform) => {
    setComingSoon(platform);

    setTimeout(() => {
      setComingSoon(null);
    }, 1800);
  };

  return (
    <footer className="footer">

      {/* =====================================================
          MAIN FOOTER
      ===================================================== */}

      <div className="footer-action-row">

        {/* ===================================================
            LEFT - COMPANY / BRAND
        =================================================== */}

        <div className="footer-action-left">

          <div className="footer-top-row">

            {/* Logo */}
            <div className="footer-logo-section">
              <img
                src={footerLogo}
                alt="MeghaAI Logo"
                className="footer-logo"
              />
            </div>

            {/* Vertical Divider */}
            <div className="vertical-divider"></div>

            {/* Company Details */}
            <div className="footer-company-details">

              {/* Email */}
              {/* <div className="footer-contact-row">

                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  className="mail-icon"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" />
                </svg>

                <span
                  style={{
                    fontFamily: 'Inter, "DM Sans", sans-serif',
                    fontSize: "12px",
                  }}
                >
                  <a
                    href="mailto:support@meghaai.in"
                    className="footer-email-link"
                  >
                    support@meghaai.in
                  </a>
                </span>

              </div> */}

              <div className="footer-contact-row">
  <span
    style={{
      fontFamily: 'Inter, "DM Sans", sans-serif',
      fontSize: "12px",
    }}
  >
<a
  href="mailto:support@meghaai.in"
  className="footer-email-link"
  onClick={() => {
    console.log("EMAIL CLICKED");
  }}
>
  support@meghaai.in
</a>
  </span>
</div>

            </div>

          </div>

          {/* Horizontal Divider */}
          <div className="horizontal-divider"></div>

          <p className="address">
            <strong>T-Hub, Plot No. 1/C, Sy No. 83/1</strong>
            <br />
            Raidurgam Panmaktha, Hyderabad Knowledge City
            <br />
            Serilingampally, Hyderabad – 500081, Telangana, India
            <br />
          </p>

        </div>

        {/* ===================================================
            RIGHT - LEARN MORE
        =================================================== */}

        <div className="footer-action-center">

          <h4>Learn More</h4>

          <div className="footer-links">

            <div onClick={() => navigate("/solutions")}>
              Platform
            </div>

            <div onClick={() => navigate("/products")}>
              Solutions
            </div>

            <div onClick={() => navigate("/industries")}>
              Industries
            </div>

            <div onClick={() => navigate("/overview")}>
              About Us
            </div>

          </div>

        </div>

        {/* ===================================================
            POLICIES
        =================================================== */}

        <div className="footer-action-center">

          <h4>Policies</h4>

          <div className="footer-links">

            <div onClick={() => navigate("/privacy-policy")}>
              Privacy Policy
            </div>

            <div onClick={() => navigate("/terms-and-conditions")}>
              Terms & Conditions
            </div>

            <div onClick={() => navigate("/cookie-policy")}>
              Cookie Policy
            </div>

          </div>

        </div>

      </div>

      {/* =====================================================
          BOTTOM BAR
      ===================================================== */}

      <div className="footer-bottom">

        {/* Copyright */}
        <div className="footer-copyright">
          © {new Date().getFullYear()} by MeghaAI
        </div>

        {/* ===================================================
            SOCIAL MEDIA
        =================================================== */}

        <div className="footer-social">

          <span className="footer-social-label">
            Follow us on
          </span>

          {/* LINKEDIN - ACTIVE */}
          <a
            href="https://www.linkedin.com/company/meghaai"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-button linkedin-active"
            aria-label="MeghaAI LinkedIn"
          >
            <FaLinkedinIn />
          </a>

          {/* FACEBOOK */}
          <div className="social-icon-wrapper">

            <button
              type="button"
              className="social-icon-button"
              onClick={() => handleComingSoon("facebook")}
              aria-label="Facebook"
            >
              <FaFacebookF />
            </button>

            {comingSoon === "facebook" && (
              <span className="coming-soon-popup">
                Coming Soon
              </span>
            )}

          </div>

          {/* INSTAGRAM */}
          <div className="social-icon-wrapper">

            <button
              type="button"
              className="social-icon-button"
              onClick={() => handleComingSoon("instagram")}
              aria-label="Instagram"
            >
              <FaInstagram />
            </button>

            {comingSoon === "instagram" && (
              <span className="coming-soon-popup">
                Coming Soon
              </span>
            )}

          </div>

          {/* X */}
          <div className="social-icon-wrapper">

            <button
              type="button"
              className="social-icon-button"
              onClick={() => handleComingSoon("x")}
              aria-label="X"
            >
              <FaXTwitter />
            </button>

            {comingSoon === "x" && (
              <span className="coming-soon-popup">
                Coming Soon
              </span>
            )}

          </div>

          {/* YOUTUBE */}
          <div className="social-icon-wrapper">

            <button
              type="button"
              className="social-icon-button"
              onClick={() => handleComingSoon("youtube")}
              aria-label="YouTube"
            >
              <FaYoutube />
            </button>

            {comingSoon === "youtube" && (
              <span className="coming-soon-popup">
                Coming Soon
              </span>
            )}

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;