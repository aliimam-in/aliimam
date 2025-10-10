"use client";

import "@/src/styles/globals.css";
import Script from "next/script";

export default function ViewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        id="theme-sync"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              const ALLOWED_ORIGINS = [window.origin]; // Adjust if cross-domain
              
              window.addEventListener('message', function(event) {
                if (!event.data || event.data.type !== 'theme-sync') return;
                if (ALLOWED_ORIGINS.length && !ALLOWED_ORIGINS.includes(event.origin)) return;

                const root = document.documentElement;
                const body = document.body;
                
                if (event.data.themeClasses?.length) {
                  Array.from(body.classList)
                    .filter((cls) => cls.startsWith('theme-'))
                    .forEach((cls) => body.classList.remove(cls));
                  event.data.themeClasses.forEach((cls) => body.classList.add(cls));
                }
                
                if (event.data.dataTheme) {
                  root.setAttribute('data-theme', event.data.dataTheme);
                  body.setAttribute('data-theme', event.data.dataTheme);
                }
                
                if (event.data.cssVariables) {
                  Object.entries(event.data.cssVariables).forEach(([key, value]) => {
                    root.style.setProperty(key, value);
                    body.style.setProperty(key, value);
                  });
                }
              });
              
              if (window.parent !== window) {
                window.parent.postMessage({ type: 'request-theme' }, '*');
              }
            })();
          `,
        }}
      />
      {children}
    </>
  );
}
