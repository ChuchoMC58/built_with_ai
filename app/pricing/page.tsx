"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Check, Info } from "lucide-react";

type Plan = {
  name: string;
  price: string;
  videosPerMonth: string;
  credits: string;
  series: string;
  popular?: boolean;
};

const plans: Plan[] = [
  { name: "Starter", price: "$39", videosPerMonth: "40 videos por mes", credits: "400 créditos", series: "1 serie" },
  { name: "Growth", price: "$69", videosPerMonth: "120 videos por mes", credits: "1200 créditos", series: "2 series", popular: true },
  { name: "Influencer", price: "$129", videosPerMonth: "240 videos por mes", credits: "2400 créditos", series: "3 series" },
  { name: "Ultra", price: "$199", videosPerMonth: "500 videos por mes", credits: "5000 créditos", series: "4 series" },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen px-4 sm:px-6 lg:px-10 py-10">
      {/* Navbar visible por defecto */}
      <div className="mx-auto max-w-6xl">
        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Planes y precios</h1>
          <p className="mt-2 text-white/70">Elige el plan que se ajuste a tu volumen de producción.</p>
        </header>

        <TooltipProvider>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
            {plans.map((p) => (
              <Card
                key={p.name}
                className={`rounded-3xl bg-white/[0.02] border-white/10 h-full ${
                  p.popular ? "ring-1 ring-purple-400/60" : ""
                }`}
              >
                <CardHeader className="pt-8">
                  {p.popular && (
                    <div className="-mt-4 mb-3 inline-flex items-center gap-2 rounded-full bg-purple-600 text-white px-3 py-1 text-xs font-medium">
                      ⭐ Más popular
                    </div>
                  )}
                  <CardTitle className="text-xl">{p.name}</CardTitle>
                  <CardDescription className="text-white/60">{p.videosPerMonth}</CardDescription>
                  <div className="mt-4">
                    <div className="text-4xl font-semibold">{p.price}</div>
                    <div className="text-sm text-white/60">/ mensual</div>
                  </div>
                </CardHeader>
                <CardContent className="pb-8">
                  <Button className="w-full rounded-full mb-6">Suscribirse</Button>

                  <div className="text-xs uppercase tracking-wide text-white/60 mb-2">Créditos</div>
                  <div className="mb-5 flex items-center gap-2 text-sm">
                    <Check className="size-4 text-emerald-400" />
                    <span>{p.credits}</span>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Info className="size-4 text-white/50" />
                      </TooltipTrigger>
                      <TooltipContent>Créditos que puedes usar para generar videos</TooltipContent>
                    </Tooltip>
                  </div>

                  <div className="text-xs uppercase tracking-wide text-white/60 mb-2">Características</div>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center gap-2"><Check className="size-4 text-emerald-400" /> {p.series}</li>
                    <li className="flex items-center gap-2"><Check className="size-4 text-emerald-400" /> Locuciones con IA</li>
                    <li className="flex items-center gap-2"><Check className="size-4 text-emerald-400" /> Contenido generado con IA</li>
                    <li className="flex items-center gap-2"><Check className="size-4 text-emerald-400" /> Música de fondo</li>
                    <li className="flex items-center gap-2"><Check className="size-4 text-emerald-400" /> Sin marca de agua</li>
                    <li className="flex items-center gap-2"><Check className="size-4 text-emerald-400" /> Auto‑publicación en TikTok y YouTube</li>
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TooltipProvider>
      </div>
    </main>
  );
}
