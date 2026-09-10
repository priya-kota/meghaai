import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookieConsent } from '../../hooks/useCookieConsent';
import '../../styles/cookie-consent.css';

const CookieConsent = () => {
  const navigate = useNavigate();
  const {
    consent,
    isLoaded,
    showBanner,
    acceptAll,
    rejectAll,
    openPreferences,
  } = useCookieConsent();

  if (!isLoaded || !showBanner) {
    return null;
  }

  const handleCookiePolicyClick = () => {
    navigate('/cookie-policy');
    window.scrollTo(0, 0);
  };

  return (
    <div className="cookie-consent-banner" role="region" aria-label="Cookie Consent">
      <div className="cookie-consent-container">
        {/* LEFT SECTION */}
        <div className="cookie-consent-left">
          <h3 className="cookie-consent-title">We value your privacy</h3>
          <p className="cookie-consent-description">
            We use cookies to improve your experience, personalize content, and analyze traffic. 
            By clicking "Accept All", you consent to our use of cookies.{' '}
            <button
              type="button"
              className="cookie-policy-link"
              onClick={handleCookiePolicyClick}
              aria-label="Open Cookie Policy"
            >
              Cookie Policy
            </button>
          </p>
        </div>

        {/* VERTICAL DIVIDER */}
        <div className="cookie-consent-divider"></div>

        {/* RIGHT SECTION - BUTTONS */}
        <div className="cookie-consent-right">
          <button
            type="button"
            className="cookie-btn cookie-btn-accept"
            onClick={acceptAll}
            aria-label="Accept all cookies"
          >
            Accept all
          </button>
          <button
            type="button"
            className="cookie-btn cookie-btn-reject"
            onClick={rejectAll}
            aria-label="Reject all cookies"
          >
            Reject all
          </button>
        </div>
      </div>

      {/* BOTTOM ROW */}
      <div className="cookie-consent-bottom-divider"></div>
      <div className="cookie-consent-footer">
        <div className="cookie-consent-links">
          <button
            type="button"
            className="cookie-footer-link"
            onClick={() => {
              navigate('/terms-and-conditions');
              window.scrollTo(0, 0);
            }}
            aria-label="Open Terms and Conditions"
          >
            Terms and Conditions
          </button>
          <button
            type="button"
            className="cookie-footer-link"
            onClick={() => {
              navigate('/privacy-policy');
              window.scrollTo(0, 0);
            }}
            aria-label="Open Privacy Policy"
          >
            Privacy Policy
          </button>
        </div>
        <div className="cookie-consent-branding">
          Megha AI
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
