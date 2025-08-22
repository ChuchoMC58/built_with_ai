"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";

export default function Features() {
  return (
    <section className="relative py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl/tight sm:text-4xl/tight font-extrabold tracking-tight">
            Contar historias nunca fue tan fácil
          </h2>
          <p className="mt-3 text-sm sm:text-base text-foreground/70">
            De imágenes a video, nuestra IA puede generar cualquier estilo de video en segundos.
          </p>
        </div>

        {/* Grid con cards grandes arriba y tres pequeñas abajo */}
  <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {/* Izquierda: Text to Video */}
          <Card className="relative p-0 overflow-hidden rounded-2xl border-white/10 bg-white/5">
            <div className="p-6 md:p-8">
              <h3 className="text-xl font-semibold">La herramienta Text to Video más potente</h3>
              <p className="mt-2 text-sm text-foreground/70 max-w-prose">
                Genera un guion con IA, elige un estilo, una voz y un fondo, y obtén un video en segundos.
              </p>
            </div>
            <div className="relative px-6 md:px-8 pb-6 md:pb-8">
              <div className="group relative aspect-[16/9] overflow-hidden rounded-xl border border-white/10">
                <img src="/features/text2video.svg" alt="Text to Video" className="absolute inset-0 h-full w-full object-cover transform-gpu transition-transform duration-500 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
              </div>
            </div>
          </Card>

          {/* Derecha: AI Photo (mosaico) */}
          <Card className="relative p-0 overflow-hidden rounded-2xl border-white/10 bg-white/5">
            <div className="p-6 md:p-8">
              <h3 className="text-xl font-semibold">AI Photo (imágenes realistas)</h3>
              <p className="mt-2 text-sm text-foreground/70 max-w-prose">
                Genera imágenes realistas con modelos de vanguardia.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 px-6 md:px-8 pb-6 md:pb-8">
              {["/features/aiphoto-1.svg","/features/aiphoto-2.svg","/features/aiphoto-3.svg","/features/aiphoto-4.svg"].map((src)=> (
                <div key={src} className="group relative aspect-[4/5] overflow-hidden rounded-xl border border-white/10">
                  <img src={src} alt="AI Photo" className="absolute inset-0 h-full w-full object-cover transform-gpu transition-transform duration-500 ease-out group-hover:scale-105" />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Fila inferior: 3 cards */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="relative p-0 overflow-hidden rounded-2xl border-white/10 bg-white/5">
            <div className="p-6 md:p-8">
              <h3 className="text-lg font-semibold">Convierte imágenes en videos</h3>
              <p className="mt-2 text-sm text-foreground/70">Haz tus videos más atractivos transformando imágenes en clips con movimiento.</p>
            </div>
            <div className="relative px-6 md:px-8 pb-6 md:pb-8">
              <div className="group relative aspect-[4/5] overflow-hidden rounded-xl border border-white/10">
                <img src="/features/turn-images.svg" alt="Turn images into videos" className="absolute inset-0 h-full w-full object-cover transform-gpu transition-transform duration-500 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
              </div>
            </div>
          </Card>
          <Card className="relative p-0 overflow-hidden rounded-2xl border-white/10 bg-white/5">
            <div className="p-6 md:p-8">
              <h3 className="text-lg font-semibold">Voiceover automático</h3>
              <p className="mt-2 text-sm text-foreground/70">Genera narraciones con voces naturales (ElevenLabs & OpenAI).</p>
            </div>
            <div className="relative px-6 md:px-8 pb-6 md:pb-8">
              <div className="group relative aspect-[4/5] overflow-hidden rounded-xl border border-white/10">
                <img src="/features/voiceover.svg" alt="Automatic voiceover" className="absolute inset-0 h-full w-full object-cover transform-gpu transition-transform duration-500 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
              </div>
            </div>
          </Card>
          <Card className="relative p-0 overflow-hidden rounded-2xl border-white/10 bg-white/5">
            <div className="p-6 md:p-8">
              <h3 className="text-lg font-semibold">Subtítulos personalizables</h3>
              <p className="mt-2 text-sm text-foreground/70">Subtítulos hermosos y personalizables para tus videos.</p>
            </div>
            <div className="relative px-6 md:px-8 pb-6 md:pb-8">
              <div className="group relative aspect-[4/5] overflow-hidden rounded-xl border border-white/10">
                <img src="/features/captions.svg" alt="Beautiful customizable captions" className="absolute inset-0 h-full w-full object-cover transform-gpu transition-transform duration-500 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
