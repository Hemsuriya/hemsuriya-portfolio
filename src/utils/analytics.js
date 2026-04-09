export function trackEvent(eventName, params = {}) {
  if (typeof window === "undefined") return;

  const payload = {
    event: eventName,
    ...params,
    timestamp: new Date().toISOString(),
  };

  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push(payload);
  }

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
}