import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookieConsent } from '../../hooks/useCookieConsent';
import '../../styles/cookie-consent.css';

const defaultPreferences = {
  necessary: true,
  analytics: false,
  functional: false,
  marketing: false,
};

const cookieCategories = [
  {
    key: 'necessary',
    title: 'Essential Cookies',
    description: 'Required for the website to function properly. They support security, navigation, session management, and basic website functionality. These cookies cannot be disabled.',
    badge: 'Always enabled',
  },
  {
    key: 'analytics',
    title: 'Analytics & Performance',
    description: 'Helps MeghaAI understand how visitors use the website by measuring page visits, traffic sources, engagement, and website performance. This helps us improve the website and user experience.',
    badge: 'Optional',
  },
  {
    key: 'functional',
    title: 'Functional Preferences',
    description: 'Remembers preferences such as language, display preferences, and website settings so MeghaAI can provide a more personalized experience.',
    badge: 'Optional',
  },
  {
    key: 'marketing',
    title: 'Marketing & Communications',
    description: "Used only where applicable to understand engagement with MeghaAI's content, campaigns, and communications.",
    badge: 'Optional',
  },
];

const CookiePreferences = () => {
  const { consent, showPreferences, closePreferences, savePreferences } = useCookieConsent();
  const navigate = useNavigate();
  const closeButtonRef = useRef(null);
  const [prefs, setPrefs] = useState(defaultPreferences);

  useEffect(() => {
    if (!showPreferences) {
      return undefined;
    }

    setPrefs({ ...defaultPreferences, ...consent, necessary: true });
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closePreferences();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [showPreferences, consent, closePreferences]);

  const handleToggle = (category) => {
    if (category === 'necessary') {
      return;
    }

    setPrefs((previous) => ({
      ...previous,
      [category]: !previous[category],
    }));
  };

  const handlePolicyLink = (path) => {
    closePreferences();
    navigate(path);
    window.scrollTo(0, 0);
  };

  const handleAllowAll = () => {
    savePreferences({
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true,
    });
  };

  const handleRejectNonEssential = () => {
    savePreferences({
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
      <div
        className="cookie-modal-overlay"
        onClick={closePreferences}
        role="presentation"
      />

      <div
        className="cookie-modal"
        role="dialog"
        aria-labelledby="cookie-modal-title"
        aria-describedby="cookie-modal-description"
        aria-modal="true"
      >
        <button
          type="button"
          className="cookie-modal-close"
          onClick={closePreferences}
          aria-label="Close cookie preferences"
          ref={closeButtonRef}
        >
          <span aria-hidden="true">&times;</span>
        </button>

        <div className="cookie-modal-content">
          <h2 id="cookie-modal-title" className="cookie-modal-title">
            Manage Cookie Preferences
          </h2>

          <p id="cookie-modal-description" className="cookie-modal-description">
            MeghaAI uses cookies and similar technologies to help provide a secure, reliable and
            personalized experience across our industrial AI platform and website. Choose which
            optional cookie categories you allow. Your choices are saved on this device.
          </p>

          <div className="cookie-categories">
            {cookieCategories.map(({ key, title, description, badge }) => (
              <div className="cookie-category" key={key}>
                <div className="cookie-category-header">
                  <div className="cookie-category-info">
                    <h3 className="cookie-category-title">{title}</h3>
                    <span className="cookie-category-badge">{badge}</span>
                  </div>
                  <div className="cookie-toggle">
                    <input
                      type="checkbox"
                      id={`cookie-${key}`}
                      checked={prefs[key]}
                      disabled={key === 'necessary'}
                      onChange={() => handleToggle(key)}
                      aria-label={`${title}: ${prefs[key] ? 'enabled' : 'disabled'}`}
                    />
                    <label htmlFor={`cookie-${key}`}>{title}</label>
                  </div>
                </div>
                <p className="cookie-category-description">{description}</p>
              </div>
            ))}
          </div>

          <div className="cookie-policy-links">
            <button
              type="button"
              className="cookie-footer-link"
              onClick={() => handlePolicyLink('/privacy-policy')}
            >
              Privacy Policy
            </button>
            <button
              type="button"
              className="cookie-footer-link"
              onClick={() => handlePolicyLink('/cookie-policy')}
            >
              Cookie Policy
            </button>
          </div>

          <div className="cookie-modal-buttons">
            <button
              type="button"
              className="cookie-modal-btn cookie-modal-btn-secondary"
              onClick={handleRejectNonEssential}
            >
              Reject Non-Essential
            </button>
            <button
              type="button"
              className="cookie-modal-btn cookie-modal-btn-secondary"
              onClick={handleAllowAll}
            >
              Allow All
            </button>
            <button
              type="button"
              className="cookie-modal-btn cookie-modal-btn-primary"
              onClick={() => savePreferences(prefs)}
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
