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
      suppressHydrationWarning
        id="theme-sync"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              window.addEventListener('message', function(event) {
                if (event.data.type === 'theme-sync') {
                  const root = document.documentElement;
                  const body = document.body;
                  
                  if (event.data.themeClasses && event.data.themeClasses.length > 0) {
                    Array.from(body.classList)
                      .filter(function(cls) { return cls.startsWith('theme-'); })
                      .forEach(function(cls) { body.classList.remove(cls); });
                    
                    event.data.themeClasses.forEach(function(cls) {
                      body.classList.add(cls);
                    });
                  }
                  
                  if (event.data.dataTheme) {
                    root.setAttribute('data-theme', event.data.dataTheme);
                    body.setAttribute('data-theme', event.data.dataTheme);
                  }
                  
                  if (event.data.cssVariables) {
                    Object.entries(event.data.cssVariables).forEach(function([key, value]) {
                      root.style.setProperty(key, value);
                      body.style.setProperty(key, value);
                    });
                  }
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
