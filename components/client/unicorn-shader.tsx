"use client";

import Script from "next/script";
import { useEffect } from "react";

type UnicornStudioGlobal = {
  init?: () => void;
};

declare global {
  interface Window {
    UnicornStudio?: UnicornStudioGlobal;
  }
}

export default function UnicornShader() {
  // Inicializa si el script ya está disponible
  useEffect(() => {
    const u = window.UnicornStudio;
    if (u && typeof u.init === "function") {
      // Re-inicializa siempre que el componente se monte (navegación cliente)
      // La librería es idempotente y vuelve a escanear los data-us-project del DOM
      u.init();
    }
  }, []);

  return (
    <div className="absolute inset-0 -z-20 pointer-events-none" aria-hidden>
      {/* Script oficial Unicorn Studio */}
      <Script
        src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js"
        strategy="afterInteractive"
        onLoad={() => {
          try {
            const u = window.UnicornStudio;
            if (u && typeof u.init === "function") {
              u.init();
            }
          } catch {}
        }}
      />
      {/* Usa el proyecto que compartiste; ocupa 100% del fondo */}
      <div data-us-project="h2YDVzdoMyOUUNvzblPU" className="h-full w-full" />
    </div>
  );
}
