import { currentUser } from "@clerk/nextjs/server";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LayoutGrid, Clapperboard, Film } from "lucide-react";
import Link from "next/link";

export default async function DashboardPage() {
  const user = await currentUser();
  const firstName = user?.firstName ?? "";
  return (
    <main className="min-h-screen px-4 sm:px-6 lg:px-10 py-6 sm:py-8">
      {/* Encabezado y aviso de plan */}
      <div className="mx-auto max-w-7xl mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-white/80">
          <LayoutGrid className="size-4 text-white/60" />
          <span>Dashboard</span>
        </div>
        <div className="flex items-center gap-3">
          <Badge variant="secondary" className="bg-purple-500/10 text-purple-200 hover:bg-purple-500/15">
            Estás en el plan Free · Actualiza para exportar videos y más
          </Badge>
          <Button asChild className="rounded-full bg-purple-600 hover:bg-purple-500">
            <Link href="/pricing">Mejorar plan</Link>
          </Button>
        </div>
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="rounded-3xl bg-white/[0.03] border border-white/10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] p-4 sm:p-6 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
            {/* Columna izquierda */}
            <section>
              <h1 className="text-[28px] sm:text-[36px] font-semibold tracking-tight">
                Bienvenido a StoryShort{firstName ? `, ${firstName}` : ""} <span className="inline-block">👋</span>
              </h1>
              <p className="mt-3 text-[15px] text-white/75 max-w-xl">
                Crea videos sin rostro en piloto automático con IA para cualquier propósito, en segundos.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Button
                  className="rounded-full px-5 py-5 text-[15px] bg-gradient-to-r from-indigo-500 to-blue-500 shadow-[0_0_0_6px_rgba(59,130,246,0.25)] hover:from-indigo-500 hover:to-indigo-400"
                >
                  <Clapperboard className="mr-2 size-4" /> Crear nuevo video
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full px-5 py-5 text-[15px] border-white/15 bg-white/5 hover:bg-white/10"
                >
                  Tutoriales
                </Button>
              </div>
            </section>

            {/* Columna derecha - vista previa */}
            <section>
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                <div className="aspect-video w-full">
                  <img
                    src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80"
                    alt="Vista previa del video"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Secciones inferiores */}
      <div className="mx-auto max-w-7xl mt-6 sm:mt-8 space-y-6">
        {/* Videos recientes */}
        <Card className="rounded-2xl bg-white/[0.02] border-white/10">
          <CardHeader className="flex-row items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2 text-[15px]">
                <Film className="size-4 text-white/70" /> Videos recientes
              </CardTitle>
              <CardDescription className="text-white/50">Videos creados recientemente</CardDescription>
            </div>
            <Button variant="ghost" className="text-white/80 hover:text-white">Ver todo →</Button>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center py-12 sm:py-16">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white/5 border border-white/10">
                  <Film className="size-6 text-white/60" />
                </div>
                <p className="font-medium">No hay videos</p>
                <p className="text-sm text-white/55">Aún no has creado ningún video.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tutoriales */}
        <Card className="rounded-2xl bg-white/[0.02] border-white/10">
          <CardHeader>
            <div>
              <CardTitle className="text-[15px]">Tutoriales</CardTitle>
              <CardDescription className="text-white/50">Aprende a usar StoryShort</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <div className="rounded-xl overflow-hidden border border-white/10 bg-black max-w-2xl">
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Tutorial StoryShort"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
            <p className="mt-3 text-sm text-white/80 font-medium">Primeros pasos con StoryShort</p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
