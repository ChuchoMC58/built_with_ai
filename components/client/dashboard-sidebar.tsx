"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import {
  LayoutGrid,
  Video,
  Clapperboard,
  Calendar,
  Upload,
  Settings,
  ChevronLeft,
  ChevronRight,
  Flame,
  MenuIcon,
} from "lucide-react";

type Item = { href: string; label: string; icon: React.ComponentType<any> };

const mainItems: Item[] = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutGrid },
  { href: "#", label: "Videos", icon: Video },
  { href: "#", label: "Series", icon: Clapperboard },
  { href: "#", label: "Calendario", icon: Calendar },
  { href: "#", label: "Exportaciones", icon: Upload },
];

const settingsItems: Item[] = [
  { href: "#", label: "Ajustes", icon: Settings },
  { href: "#", label: "Afiliados 🔥", icon: Flame },
];

export default function DashboardSidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const Aside = (
    <aside
      className={cn(
        "hidden lg:block",
        collapsed ? "w-[72px]" : "w-[260px]"
      )}
    >
  {/* Contenedor de altura completa que se desplaza con la página */}
  <div className="min-h-screen flex flex-col border-r border-white/10 bg-black/40 backdrop-blur">
        <div className="flex items-center justify-between gap-2 h-14 px-3">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-md bg-yellow-400" />
          {!collapsed && <span className="font-semibold">StoryShort.ai</span>}
        </Link>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size="icon"
                variant="ghost"
                aria-label={collapsed ? "Expandir" : "Colapsar"}
                onClick={() => setCollapsed((v) => !v)}
              >
                {collapsed ? <ChevronRight className="size-4" /> : <ChevronLeft className="size-4" />}
              </Button>
            </TooltipTrigger>
            <TooltipContent>{collapsed ? "Expandir" : "Colapsar"}</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        </div>

        <nav className="px-2 py-2 space-y-1">
        {mainItems.map((it) => (
          <Link key={it.label} href={it.href} className={cn(
            "group flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-white/80 hover:bg-white/5 hover:text-white",
            collapsed && "justify-center"
          )}>
            <it.icon className="size-4" />
            {!collapsed && <span>{it.label}</span>}
          </Link>
        ))}
        </nav>

        <div className="mt-6 px-4 text-xs uppercase tracking-wide text-white/50">{!collapsed && "Ajustes"}</div>
        <nav className="px-2 py-2 space-y-1">
        {settingsItems.map((it) => (
          <Link key={it.label} href={it.href} className={cn(
            "group flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-white/80 hover:bg-white/5 hover:text-white",
            collapsed && "justify-center"
          )}>
            <it.icon className="size-4" />
            {!collapsed && <span>{it.label}</span>}
          </Link>
        ))}
        </nav>

        {/* Tarjeta de créditos */}
        <div className={cn("mt-auto p-3", collapsed && "hidden")}> 
          <div className="rounded-2xl bg-gradient-to-br from-purple-700/60 to-fuchsia-600/60 p-4 text-white">
            <div className="text-sm">10</div>
            <div className="text-xs text-white/80">Créditos disponibles</div>
            <Button asChild className="mt-4 w-full rounded-full bg-white text-black hover:bg-white/90">
              <Link href="/pricing">Actualizar ahora</Link>
            </Button>
          </div>
        </div>
      </div>
    </aside>
  );

  return (
    <div>
      {/* Móvil: botón + sheet */}
      <div className="lg:hidden p-2">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" aria-label="Abrir menú">
              <MenuIcon className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-[280px]">
            {/* Aside expandido dentro del sheet */}
            <div className="flex h-full flex-col bg-black">
              <div className="h-14 px-4 flex items-center gap-2 border-b border-white/10">
                <div className="h-6 w-6 rounded-md bg-yellow-400" />
                <span className="font-semibold">StoryShort.ai</span>
              </div>
              <nav className="px-2 py-2 space-y-1">
                {mainItems.map((it) => (
                  <Link key={it.label} href={it.href} className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-white/80 hover:bg-white/5 hover:text-white">
                    <it.icon className="size-4" />
                    <span>{it.label}</span>
                  </Link>
                ))}
              </nav>
              <div className="mt-auto p-3">
                <div className="rounded-2xl bg-gradient-to-br from-purple-700/60 to-fuchsia-600/60 p-4 text-white">
                  <div className="text-sm">10</div>
                  <div className="text-xs text-white/80">Créditos disponibles</div>
                  <Button asChild className="mt-4 w-full rounded-full bg-white text-black hover:bg-white/90">
                    <Link href="/pricing">Actualizar ahora</Link>
                  </Button>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop aside */}
      {Aside}
    </div>
  );
}
