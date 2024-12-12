import ReactGA from 'react-ga4';

// Initialize GA4 with your measurement ID
export const initGA = () => {
  ReactGA.initialize('G-XXXXXXXXXX'); // Replace with your actual GA4 measurement ID
};

// Track page views
export const trackPageView = (path: string) => {
  ReactGA.send({ hitType: "pageview", page: path });
};

// Track events
export const trackEvent = (category: string, action: string, label?: string) => {
  ReactGA.event({
    category,
    action,
    label
  });
};

// Track CPR card interactions
export const trackCPRInteraction = (cprTitle: string, action: string) => {
  trackEvent('CPR_Card', action, cprTitle);
};

// Track search interactions
export const trackSearch = (searchTerm: string) => {
  trackEvent('Search', 'perform_search', searchTerm);
};
