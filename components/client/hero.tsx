"use client";

import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Placeholder de fondo para shader de Unicorn Studio */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-black via-zinc-900 to-background opacity-90"
        aria-hidden
        id="shader-placeholder"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
            <span className="h-2 w-2 rounded-full bg-yellow-400" />
            Potenciado por IA
          </span>
          <h1 className="mt-6 text-4xl/tight sm:text-5xl/tight md:text-6xl/tight font-extrabold tracking-tight">
            Crea videos virales sin mostrar tu rostro en Auto‑Pilot
          </h1>
          <p className="mt-5 text-base sm:text-lg text-foreground/80 max-w-prose">
            Genera videos con IA en minutos. Nuestra herramienta crea contenido
            corto listo para publicar y optimizado para redes.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
            <Button className="w-full sm:w-auto rounded-full">Empezar gratis</Button>
            <Button variant="outline" className="w-full sm:w-auto rounded-full">
              Ver cómo funciona
            </Button>
          </div>
        </div>

        {/* Tarjetas de ejemplo estilo mock, simples por ahora */}
        <div className="relative grid grid-cols-3 gap-4 sm:gap-6 px-4 md:px-0">
          <div className="aspect-[9/16] rounded-2xl bg-white/5 border border-white/10 shadow-2xl rotate-[-8deg] translate-y-6" />
          <div className="aspect-[9/16] rounded-2xl bg-white/10 border border-white/10 shadow-2xl" />
          <div className="aspect-[9/16] rounded-2xl bg-white/5 border border-white/10 shadow-2xl rotate-[12deg] translate-y-8" />
        </div>
      </div>
    </section>
  );
}
