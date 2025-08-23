"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Youtube, Music, Mic2, Wand2, Repeat, Brain } from "lucide-react";

type Item = {
  title: string;
  desc: string;
  icon: React.ReactNode;
};

const items: Item[] = [
  {
    title: "Crea YouTube Shorts",
    desc: "Crea Shorts con contenido generado por IA. No necesitas grabar nada.",
    icon: <Youtube className="h-5 w-5 text-red-500" />,
  },
  {
    title: "Crea videos virales de TikTok",
    desc: "Videos que se vuelven virales. No necesitas bailar ni lip sync.",
    icon: <Music className="h-5 w-5" />,
  },
  {
    title: "Publica en TikTok y YouTube",
    desc: "Publica tus videos directamente desde la app.",
    icon: <Repeat className="h-5 w-5" />,
  },
  {
    title: "100% Potenciado por IA",
    desc: "Usamos los modelos más potentes para generar contenido relevante.",
    icon: <Brain className="h-5 w-5" />,
  },
  {
    title: "Voiceovers generados con IA",
    desc: "Modelos de IA de última generación para narraciones.",
    icon: <Mic2 className="h-5 w-5" />,
  },
  {
    title: "Música de fondo",
    desc: "Agrega música a tus videos. Librería con miles de canciones.",
    icon: <Music className="h-5 w-5" />,
  },
  {
    title: "Y mucho más…",
    desc: "La app evoluciona constantemente. Nuevas features cada semana.",
    icon: <Wand2 className="h-5 w-5" />,
  },
];

export default function Benefits() {
  return (
    <section className="relative py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl/tight sm:text-4xl/tight font-extrabold tracking-tight">
            Crear videos virales sin rostro nunca fue tan fácil
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-white/10 rounded-xl overflow-hidden">
          {items.map((it, i) => (
            <div
              key={i}
              className="group relative p-6 border-white/10 text-sm lg:min-h-[180px] flex flex-col gap-2 transition-colors
                [&:not(:nth-child(4n))]:lg:border-r [&:nth-child(n+5)]:border-t"
            >
              {/* Overlay de iluminación al hover */}
              <div aria-hidden className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(80%_120%_at_50%_-20%,rgba(255,255,255,0.10)_0%,transparent_60%)]" />
              <div className="flex items-center gap-3 text-white">
                <span className="grid place-items-center h-7 w-7 rounded-full bg-white/5 border border-white/10 transition-colors group-hover:bg-white/10 group-hover:border-white/20">
                  {it.icon}
                </span>
                <h3 className="text-base font-semibold">{it.title}</h3>
              </div>
              <p className="text-foreground/70 leading-relaxed">{it.desc}</p>
            </div>
          ))}
          {/* Celda en blanco para completar 4 columnas x 2 filas en desktop */}
          <div
            aria-hidden
            className="relative hidden lg:block p-6 border-white/10 text-sm lg:min-h-[180px]
              [&:not(:nth-child(4n))]:lg:border-r [&:nth-child(n+5)]:border-t"
          />
        </div>
      </div>
    </section>
  );
}
