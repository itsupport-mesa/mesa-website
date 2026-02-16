"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    FB?: {
      XFBML: {
        parse: (element?: HTMLElement) => void;
      };
    };
  }
}

export function FacebookFeed() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Facebook SDK if not already loaded
    if (!document.getElementById("facebook-jssdk")) {
      const script = document.createElement("script");
      script.id = "facebook-jssdk";
      script.src =
        "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v21.0";
      script.async = true;
      script.defer = true;
      script.crossOrigin = "anonymous";
      document.body.appendChild(script);
    } else if (window.FB) {
      // SDK already loaded, re-parse
      window.FB.XFBML.parse(containerRef.current || undefined);
    }
  }, []);

  return (
    <div ref={containerRef}>
      <div id="fb-root"></div>
      <div
        className="fb-page"
        data-href="https://www.facebook.com/MesaMadisonCountyVA/"
        data-tabs="timeline"
        data-width="500"
        data-height="600"
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true"
      >
        <blockquote
          cite="https://www.facebook.com/MesaMadisonCountyVA/"
          className="fb-xfbml-parse-ignore"
        >
          <a href="https://www.facebook.com/MesaMadisonCountyVA/">
            MESA - Madison Emergency Services Association on Facebook
          </a>
        </blockquote>
      </div>
    </div>
  );
}
