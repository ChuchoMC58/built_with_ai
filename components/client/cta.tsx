"use client";

import { Button } from "@/components/ui/button";

export default function Cta() {
  return (
    <section className="relative py-16 sm:py-20">
      {/* Grid background */}
      <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:60px_60px] [background-position:0_0]" aria-hidden />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative">
        <div className="mx-auto rounded-2xl bg-white/5 border border-white/10 p-6 sm:p-10 text-center backdrop-blur-sm">
          <h2 className="text-3xl/tight sm:text-4xl/tight font-extrabold tracking-tight">
            Di adiós a los videos aburridos 👋
          </h2>
          <p className="mt-3 text-sm sm:text-base text-foreground/70 max-w-prose mx-auto">
            Empieza hoy y crea videos atractivos para TikTok y YouTube en autopilot.
          </p>
          <div className="mt-6">
            <Button className="rounded-md">Empezar</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
