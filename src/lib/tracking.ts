/**
 * Helper to push events to the GTM dataLayer.
 * Usage: trackEvent("whatsapp_click", { method: "floating_button" })
 */
export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>,
) {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: eventName,
      ...params,
    });
  }
}

// Extend Window type for dataLayer
declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}
