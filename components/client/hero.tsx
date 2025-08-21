"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import UnicornShader from "@/components/client/unicorn-shader";

export default function Hero() {
  return (
  <section className="relative overflow-hidden">
      {/* Fondo Unicorn Studio + overlay para contraste */}
      <UnicornShader />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/60 via-zinc-900/60 to-background" aria-hidden />

    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-14 grid md:grid-cols-2 gap-10 items-center md:min-h-[calc(100dvh-4rem)]">
        <div>
          <Badge className="gap-2 bg-white/10 text-white border-white/10">
            <span className="h-2 w-2 rounded-full bg-yellow-400" />
            Impulsado por GPT‑4.5
          </Badge>
          <h1 className="mt-6 text-4xl/tight sm:text-5xl/tight md:text-6xl/tight font-extrabold tracking-tight">
            Crea videos virales sin mostrar tu rostro en Auto‑Pilot
          </h1>
          <p className="mt-5 text-base sm:text-lg text-foreground/80 max-w-prose">
            Genera videos con IA en minutos. Nuestra herramienta crea contenido
            corto listo para publicar y optimizado para redes.
          </p>
          <div className="mt-8 flex flex-col gap-3 w-full sm:max-w-md">
            <div className="flex w-full gap-2">
              <Input type="email" placeholder="Tu email" className="flex-1" />
              <Button className="rounded-md">Empezar gratis</Button>
            </div>
            <p className="text-xs text-foreground/60">Prueba sin tarjeta. Cancela cuando quieras.</p>
          </div>
        </div>

        {/* Tarjetas de ejemplo estilo mock, simples por ahora */}
        <div className="relative flex items-end justify-center gap-4 sm:gap-6 px-4 md:px-0 h-[42vh] md:h-[60vh]">
          <div className="h-full aspect-[9/16] rounded-2xl bg-white/5 border border-white/10 shadow-2xl rotate-[-8deg] translate-y-6" />
          <div className="h-full aspect-[9/16] rounded-2xl bg-white/10 border border-white/10 shadow-2xl" />
          <div className="h-full aspect-[9/16] rounded-2xl bg-white/5 border border-white/10 shadow-2xl rotate-[12deg] translate-y-8" />
        </div>
      </div>
    </section>
  );
}
