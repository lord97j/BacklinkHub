"use client";

import Script from "next/script";

const plausibleUrl = process.env.NEXT_PUBLIC_PLAUSIBLE_URL!;
const plausibleDomain = process.env.DOMAIN!;

export function PlausibleAnalyticsScript() {
  return (
    <Script
      defer
      type="text/javascript"
      data-domain={plausibleDomain}
      src={`https://${plausibleUrl}/js/script.js`}
    />
  );
}

export function useAnalytics() {
  const trackEvent = (event: string, data?: Record<string, unknown>) => {
    if (typeof window === "undefined" || !(window as any).plausible) {
      return;
    }

    (window as any).plausible(event, {
      props: data,
    });
  };

  return {
    trackEvent,
  };
}
