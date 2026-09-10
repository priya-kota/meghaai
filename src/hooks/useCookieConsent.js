import { useState, useEffect } from 'react';

const COOKIE_CONSENT_KEY = 'meghaai_cookie_consent';

export const useCookieConsent = () => {
  const [consent, setConsent] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  // Load consent from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(COOKIE_CONSENT_KEY);
    
    if (saved) {
      const parsed = JSON.parse(saved);
      setConsent(parsed);
    }
    
    // Always show banner on page load/refresh
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

  const openPreferences = () => {
    setShowPreferences(true);
  };

  const closePreferences = () => {
    setShowPreferences(false);
  };

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
