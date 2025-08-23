"use client";

import { Card } from "@/components/ui/card";

export default function Prompts() {
  return (
    <section className="relative py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl/tight sm:text-4xl/tight font-extrabold tracking-tight">
            Convierte prompts en videos a ultra velocidad
          </h2>
          <p className="mt-3 text-sm sm:text-base text-foreground/70 max-w-2xl mx-auto">
            ¿Y si pudieras crear videos para TikTok y YouTube en autopilot y publicarlos a diario sin levantar un dedo?
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Columna izquierda */}
          <div>
            <div className="lg:min-h-[96px]">
              <h3 className="text-xl font-semibold">Cuenta historias con IA</h3>
              <p className="mt-2 text-sm text-foreground/70 max-w-prose">
                Desde escribir el guion hasta crear el video con voiceover y subtítulos, nuestra app lo hace todo.
              </p>
            </div>
            <Card className="relative mt-4 p-0 overflow-hidden rounded-2xl border-white/10 bg-white/5">
              <div className="group relative aspect-[16/9] overflow-hidden rounded-xl border border-white/10 m-4">
                <img src="/prompts/tell-stories.svg" alt="Tell Stories with AI" className="absolute inset-0 h-full w-full object-cover transform-gpu transition-transform duration-500 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
              </div>
            </Card>
          </div>

          {/* Columna derecha */}
          <div>
            <div className="lg:min-h-[96px]">
              <h3 className="text-xl font-semibold">Edita videos en segundos</h3>
              <p className="mt-2 text-sm text-foreground/70 max-w-prose">
                Genera videos virales hermosos que consiguen vistas y suscriptores.
              </p>
            </div>
            <Card className="relative mt-4 p-0 overflow-hidden rounded-2xl border-white/10 bg-white/5">
              <div className="group relative aspect-[16/9] overflow-hidden rounded-xl border border-white/10 m-4">
                <img src="/prompts/edit-seconds.svg" alt="Edit Videos in Seconds" className="absolute inset-0 h-full w-full object-cover transform-gpu transition-transform duration-500 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
