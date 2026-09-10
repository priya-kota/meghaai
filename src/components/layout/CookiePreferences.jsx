import { useState, useEffect } from 'react';
import { useCookieConsent } from '../../hooks/useCookieConsent';
import '../../styles/cookie-consent.css';

const CookiePreferences = () => {
  const {
    consent,
    showPreferences,
    closePreferences,
    savePreferences,
    acceptAll,
    rejectAll,
  } = useCookieConsent();

  const [prefs, setPrefs] = useState({
    necessary: true,
    functional: false,
    analytics: false,
    marketing: false,
  });

  // Load current preferences when modal opens
  useEffect(() => {
    if (showPreferences && consent) {
      setPrefs(consent);
    }
  }, [showPreferences, consent]);

  const handleToggle = (category) => {
    if (category === 'necessary') {
      return; // Necessary cookies cannot be disabled
    }
    setPrefs((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const handleSave = () => {
    savePreferences(prefs);
  };

  const handleAcceptAll = () => {
    setPrefs({
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true,
    });
  };

  const handleRejectAll = () => {
    setPrefs({
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false,
    });
  };

  if (!showPreferences) {
    return null;
  }

  return (
    <>
      {/* MODAL OVERLAY */}
      <div
        className="cookie-modal-overlay"
        onClick={closePreferences}
        role="presentation"
        aria-hidden="true"
      ></div>

      {/* MODAL */}
      <div
        className="cookie-modal"
        role="dialog"
        aria-labelledby="cookie-modal-title"
        aria-modal="true"
      >
        {/* CLOSE BUTTON */}
        <button
          type="button"
          className="cookie-modal-close"
          onClick={closePreferences}
          aria-label="Close cookie preferences"
        >
          ✕
        </button>

        {/* MODAL CONTENT */}
        <div className="cookie-modal-content">
          <h2 id="cookie-modal-title" className="cookie-modal-title">
            Cookie Preferences
          </h2>

          <p className="cookie-modal-description">
            Manage your cookie preferences. You can choose which types of cookies you allow.
          </p>

          {/* COOKIE CATEGORIES */}
          <div className="cookie-categories">
            {/* NECESSARY COOKIES */}
            <div className="cookie-category">
              <div className="cookie-category-header">
                <div className="cookie-category-info">
                  <h3 className="cookie-category-title">Necessary Cookies</h3>
                  <span className="cookie-category-badge">Always Enabled</span>
                </div>
                <div className="cookie-toggle">
                  <input
                    type="checkbox"
                    id="necessary"
                    checked={prefs.necessary}
                    disabled
                    aria-label="Necessary cookies"
                  />
                  <label htmlFor="necessary"></label>
                </div>
              </div>
              <p className="cookie-category-description">
                These cookies are essential for the website to function properly. They cannot be disabled.
              </p>
            </div>

            {/* FUNCTIONAL COOKIES */}
            <div className="cookie-category">
              <div className="cookie-category-header">
                <div className="cookie-category-info">
                  <h3 className="cookie-category-title">Functional Cookies</h3>
                  <span className="cookie-category-badge">Optional</span>
                </div>
                <div className="cookie-toggle">
                  <input
                    type="checkbox"
                    id="functional"
                    checked={prefs.functional}
                    onChange={() => handleToggle('functional')}
                    aria-label="Functional cookies"
                  />
                  <label htmlFor="functional"></label>
                </div>
              </div>
              <p className="cookie-category-description">
                These cookies enable enhanced functionality and personalization such as remembering your preferences.
              </p>
            </div>

            {/* ANALYTICS COOKIES */}
            <div className="cookie-category">
              <div className="cookie-category-header">
                <div className="cookie-category-info">
                  <h3 className="cookie-category-title">Analytics Cookies</h3>
                  <span className="cookie-category-badge">Optional</span>
                </div>
                <div className="cookie-toggle">
                  <input
                    type="checkbox"
                    id="analytics"
                    checked={prefs.analytics}
                    onChange={() => handleToggle('analytics')}
                    aria-label="Analytics cookies"
                  />
                  <label htmlFor="analytics"></label>
                </div>
              </div>
              <p className="cookie-category-description">
                These cookies help us understand how visitors interact with our website, enabling us to improve your experience.
              </p>
            </div>

            {/* MARKETING COOKIES */}
            <div className="cookie-category">
              <div className="cookie-category-header">
                <div className="cookie-category-info">
                  <h3 className="cookie-category-title">Marketing Cookies</h3>
                  <span className="cookie-category-badge">Optional</span>
                </div>
                <div className="cookie-toggle">
                  <input
                    type="checkbox"
                    id="marketing"
                    checked={prefs.marketing}
                    onChange={() => handleToggle('marketing')}
                    aria-label="Marketing cookies"
                  />
                  <label htmlFor="marketing"></label>
                </div>
              </div>
              <p className="cookie-category-description">
                These cookies are used to deliver personalized advertising and measure advertising effectiveness.
              </p>
            </div>
          </div>

          {/* BUTTON GROUP */}
          <div className="cookie-modal-buttons">
            <button
              type="button"
              className="cookie-modal-btn cookie-modal-btn-secondary"
              onClick={handleRejectAll}
            >
              Reject All
            </button>
            <button
              type="button"
              className="cookie-modal-btn cookie-modal-btn-secondary"
              onClick={handleAcceptAll}
            >
              Accept All
            </button>
            <button
              type="button"
              className="cookie-modal-btn cookie-modal-btn-primary"
              onClick={handleSave}
            >
              Save Preferences
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CookiePreferences;
