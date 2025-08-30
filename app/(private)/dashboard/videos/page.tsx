import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Film, Plus } from "lucide-react";
import Link from "next/link";

export default function VideosPage() {
  // TODO: conectar a datos reales
  const videos: Array<never> = [];

  return (
    <div className="mx-auto max-w-7xl space-y-6">
      {/* Encabezado de página */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl sm:text-2xl font-semibold tracking-tight">Videos</h1>
          <p className="text-white/60 text-sm">Administra y crea tus videos generados por IA.</p>
        </div>
        <Button asChild className="rounded-full bg-blue-600 hover:bg-blue-500">
          <Link href="/dashboard/videos/new">
            <Plus className="mr-2 size-4" /> Crear nuevo video
          </Link>
        </Button>
      </div>

      {/* Contenido */}
      {videos.length === 0 ? (
        <Card className="rounded-2xl bg-white/[0.02] border-white/10">
          <CardContent>
            <div className="flex items-center justify-center py-16">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/5 border border-white/10">
                  <Film className="size-7 text-white/60" />
                </div>
                <p className="font-medium text-[15px]">No hay videos</p>
                <p className="text-sm text-white/55 mt-1">Aún no has creado ningún video.</p>
                <Button asChild className="mt-5 rounded-full">
                  <Link href="/dashboard/videos/new">
                    <Plus className="mr-2 size-4" /> Crear tu primer video
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ) : (
        <div>{/* TODO: grid/listado de videos */}</div>
      )}
    </div>
  );
}
