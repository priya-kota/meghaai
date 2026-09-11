import {
  createContext,
  createElement,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

const COOKIE_CONSENT_KEY = 'meghaai_cookie_consent';
const CookieConsentContext = createContext(null);

const useCookieConsentState = () => {
  const [consent, setConsent] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  // Load consent from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(COOKIE_CONSENT_KEY);
    
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setConsent(parsed);
      } catch {
        localStorage.removeItem(COOKIE_CONSENT_KEY);
      }
    }

    // Show the banner once each time the website is loaded.
    setShowBanner(true);

    setIsLoaded(true);
  }, []);

  const saveConsent = (consentData) => {
    const consentWithTimestamp = {
      ...consentData,
      timestamp: new Date().toISOString(),
    };

    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consentWithTimestamp));
    setConsent(consentWithTimestamp);
    setShowBanner(false);
  };

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true,
    };
    saveConsent(allAccepted);
  };

  const rejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false,
    };
    saveConsent(onlyNecessary);
  };

  const savePreferences = (prefs) => {
    saveConsent(prefs);
    setShowPreferences(false);
  };

  const openPreferences = useCallback(() => {
    setShowPreferences(true);
  }, []);

  const closePreferences = useCallback(() => {
    setShowPreferences(false);
  }, []);

  const resetConsent = () => {
    localStorage.removeItem(COOKIE_CONSENT_KEY);
    setConsent(null);
    setShowBanner(true);
  };

  // Helper to check if a consent category is enabled
  const isConsented = (category) => {
    if (!consent) return false;
    return consent[category] === true;
  };

  return {
    consent,
    isLoaded,
    showBanner,
    showPreferences,
    acceptAll,
    rejectAll,
    savePreferences,
    openPreferences,
    closePreferences,
    isConsented,
    resetConsent,
    setShowBanner,
    setShowPreferences,
  };
};

export const CookieConsentProvider = ({ children }) => {
  const value = useCookieConsentState();

  return createElement(
    CookieConsentContext.Provider,
    { value },
    children,
  );
};

export const useCookieConsent = () => {
  const context = useContext(CookieConsentContext);

  if (!context) {
    throw new Error('useCookieConsent must be used within CookieConsentProvider');
  }

  return context;
};
