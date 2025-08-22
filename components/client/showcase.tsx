"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type Item = {
  title: string;
  src: string;
  badge?: string;
};

const row1: Item[] = [
  { title: "Vida con dinosaurios", src: "/showcase/dinosaurs.svg" },
  { title: "La historia de Julio César", src: "/showcase/caesar.svg", badge: "AMBITION STIRRED" },
  { title: "Convierte imágenes en videos", src: "/showcase/images-to-video.svg" },
];

const row2: Item[] = [
  { title: "La historia de Cleopatra", src: "/showcase/cleopatra.svg", badge: "AFTER CAESAR'S" },
  { title: "Aterrizaje del Apollo 11", src: "/showcase/apollo.svg", badge: "OUT OCULATING" },
  { title: "Estilo de tinta japonesa", src: "/showcase/ink.svg", badge: "WELL-EDUCATED EDUCATED" },
];

function MediaCard({ title, src, badge }: Item) {
  const isSvg = src.toLowerCase().endsWith(".svg");
  return (
    <Card className={`relative h-full p-0 overflow-hidden rounded-2xl border-white/10 shadow-2xl bg-white/5`}>
      {/* Imagen */}
      {isSvg ? (
        <img src={src} alt={title} className="absolute inset-0 h-full w-full object-cover" />
      ) : (
        <Image src={src} alt={title} fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
      )}
      {/* Vignette para legibilidad del texto */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
      {/* Badge opcional */}
      {badge ? (
        <div className="absolute left-4 top-3">
          <Badge variant="secondary" className="bg-white/90 text-black/90 backdrop-blur-sm">
            {badge}
          </Badge>
        </div>
      ) : null}
      <div className="absolute left-4 right-4 bottom-4">
        <p className="text-white/95 font-medium drop-shadow-sm whitespace-pre-line">{title}</p>
      </div>
    </Card>
  );
}

export default function Showcase() {
  return (
    <section className="relative py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl/tight sm:text-4xl/tight font-extrabold tracking-tight">
            Crea videos sin rostro para cualquier nicho
          </h2>
          <p className="mt-3 text-sm sm:text-base text-foreground/70">
            De imágenes a video, genera cualquier estilo en segundos.
          </p>
        </div>

        {/* Fila 1 */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="relative aspect-[16/9]">
              <MediaCard title={row1[0].title} src={row1[0].src} badge={row1[0].badge} />
            </div>
          </div>
          <div className="sm:col-span-1 lg:col-span-1">
            <div className="relative aspect-[4/5]">
              <MediaCard title={row1[1].title} src={row1[1].src} badge={row1[1].badge} />
            </div>
          </div>
          <div className="sm:col-span-1 lg:col-span-1">
            <div className="relative aspect-[4/5]">
              <MediaCard title={row1[2].title} src={row1[2].src} badge={row1[2].badge} />
            </div>
          </div>
        </div>

        {/* Fila 2 */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="sm:col-span-1 lg:col-span-1">
            <div className="relative aspect-[4/5]">
              <MediaCard title={row2[0].title} src={row2[0].src} badge={row2[0].badge} />
            </div>
          </div>
          <div className="sm:col-span-1 lg:col-span-1">
            <div className="relative aspect-[4/5]">
              <MediaCard title={row2[1].title} src={row2[1].src} badge={row2[1].badge} />
            </div>
          </div>
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="relative aspect-[16/9]">
              <MediaCard title={row2[2].title} src={row2[2].src} badge={row2[2].badge} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
