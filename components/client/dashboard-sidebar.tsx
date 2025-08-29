"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
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
  ChevronDown,
  ChevronUp,
  Flame,
  MenuIcon,
  // Link2,
  Moon,
  LogOut,
  Sparkles,
  Coins,
} from "lucide-react";
import { useUser, SignOutButton } from "@clerk/nextjs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Item = { href: string; label: string; icon: React.ComponentType<{ className?: string }> };

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
  const [userOpen, setUserOpen] = useState(true);
  const { user, isLoaded } = useUser();
  const name = user ? `${user.firstName ?? ""}`.trim() || user.username || user.id : "";
  const email = user?.primaryEmailAddress?.emailAddress ?? "";

  // Toggle de tema simple (añade/quita la clase 'dark' del html)
  const [dark, setDark] = useState(true);
  useEffect(() => {
    if (typeof document !== "undefined") {
      const hasDark = document.documentElement.classList.contains("dark");
      setDark(hasDark);
    }
  }, []);
  const toggleTheme = () => {
    if (typeof document === "undefined") return;
    const el = document.documentElement;
    const next = !el.classList.contains("dark");
    el.classList.toggle("dark", next);
    setDark(next);
  };

  const Aside = (
    <aside
      className={cn(
        "hidden lg:flex lg:flex-col sticky top-0 h-[100dvh] overflow-y-auto border-r border-white/10 bg-black/40 backdrop-blur",
        collapsed ? "w-[72px]" : "w-[260px]"
      )}
    >
        <div className="flex items-center justify-between gap-2 h-14 px-3">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/globe.svg" alt="Logo StoryShort" width={24} height={24} className="rounded-md" />
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

        {/* Zona inferior: tarjeta de créditos + panel de usuario */}
        <div className={cn("mt-auto p-3 space-y-3", collapsed && "hidden")}>
          {/* Tarjeta de créditos / upgrade */}
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-purple-600/25 via-fuchsia-600/20 to-transparent p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Coins className="size-5 text-purple-400" />
                <span className="text-2xl font-semibold">10</span>
              </div>
              <span className="text-xs rounded-full bg-purple-600/80 px-2 py-1">Free</span>
            </div>
            <p className="mt-1 text-xs text-white/70">Créditos disponibles</p>
            <p className="mt-3 text-sm text-white/90">¿Necesitas más? Mejora tu plan</p>
            <Link href="/dashboard/upgrade" className="mt-4 block">
              <Button className="w-full rounded-full bg-purple-600 hover:bg-purple-500 text-white">Mejorar ahora</Button>
            </Link>
          </div>

          {/* Panel de usuario */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] overflow-hidden">
            {/* Header: usuario + toggle */}
            <div className="flex items-center justify-between px-4 py-3">
              <div className="flex items-center gap-3 min-w-0">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={user?.imageUrl ?? undefined} alt={name || "Usuario"} />
                  <AvatarFallback>{(name || "U").slice(0,2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div className="min-w-0">
                  <div className="text-sm font-medium truncate">{isLoaded ? (name || "Usuario") : ""}</div>
                  <div className="text-xs text-white/60 truncate">{email}</div>
                </div>
              </div>
              <button
                type="button"
                aria-label={userOpen ? "Ocultar" : "Mostrar"}
                aria-expanded={userOpen}
                onClick={() => setUserOpen((v) => !v)}
                className="shrink-0 text-white/70 hover:text-white"
              >
                {userOpen ? <ChevronDown className="size-4" /> : <ChevronUp className="size-4" />}
              </button>
            </div>
            {userOpen && (
              <>
                {/* Modo oscuro */}
                <div className="border-t border-white/10 px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm"><Moon className="size-4 text-white/70" /> Modo oscuro</div>
                  <button
                    type="button"
                    onClick={toggleTheme}
                    className={cn(
                      "relative inline-flex h-6 w-12 items-center rounded-full transition-colors",
                      dark ? "bg-indigo-500" : "bg-white/10"
                    )}
                    aria-pressed={dark}
                    aria-label="Cambiar tema"
                  >
                    <span
                      className={cn(
                        "inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform",
                        dark ? "translate-x-6" : "translate-x-1"
                      )}
                    />
                  </button>
                </div>
                {/* Upgrade */}
                <Link href="/dashboard/upgrade" className="border-t border-white/10 px-4 py-3 flex items-center gap-2 text-sm hover:bg-white/[0.03]">
                  <Sparkles className="size-4 text-white/70" /> Mejorar a Pro
                </Link>
                {/* Logout */}
                <div className="border-t border-white/10">
                  <SignOutButton signOutOptions={{}}>
                    <Button variant="ghost" className="w-full justify-start gap-2 rounded-none text-left text-sm hover:bg-white/[0.03]">
                      <LogOut className="size-4 text-white/70" /> Cerrar sesión
                    </Button>
                  </SignOutButton>
                </div>
              </>
            )}
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
                <Image src="/globe.svg" alt="Logo StoryShort" width={24} height={24} className="rounded-md" />
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
              {/* Créditos + panel usuario (móvil) */}
              <div className="mt-auto p-3 space-y-3">
                {/* Tarjeta de créditos */}
                <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-purple-600/25 via-fuchsia-600/20 to-transparent p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Coins className="size-5 text-purple-400" />
                      <span className="text-2xl font-semibold">10</span>
                    </div>
                    <span className="text-xs rounded-full bg-purple-600/80 px-2 py-1">Free</span>
                  </div>
                  <p className="mt-1 text-xs text-white/70">Créditos disponibles</p>
                  <p className="mt-3 text-sm text-white/90">¿Necesitas más? Mejora tu plan</p>
                  <Link href="/dashboard/upgrade" className="mt-4 block">
                    <Button className="w-full rounded-full bg-purple-600 hover:bg-purple-500 text-white">Mejorar ahora</Button>
                  </Link>
                </div>

                {/* Panel de usuario */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={user?.imageUrl ?? undefined} alt={name || "Usuario"} />
                        <AvatarFallback>{(name || "U").slice(0,2).toUpperCase()}</AvatarFallback>
                      </Avatar>
                      <div className="min-w-0">
                        <div className="text-sm font-medium truncate">{isLoaded ? (name || "Usuario") : ""}</div>
                        <div className="text-xs text-white/60 truncate">{email}</div>
                      </div>
                    </div>
                    <button
                      type="button"
                      aria-label={userOpen ? "Ocultar" : "Mostrar"}
                      aria-expanded={userOpen}
                      onClick={() => setUserOpen((v) => !v)}
                      className="shrink-0 text-white/70 hover:text-white"
                    >
                      {userOpen ? <ChevronDown className="size-4" /> : <ChevronUp className="size-4" />}
                    </button>
                  </div>
                  {userOpen && (
                    <>
                      <Link href="/dashboard/upgrade" className="border-t border-white/10 px-4 py-3 flex items-center gap-2 text-sm hover:bg-white/[0.03]">
                        <Sparkles className="size-4 text-white/70" /> Mejorar a Pro
                      </Link>
                      <div className="border-t border-white/10">
                        <SignOutButton signOutOptions={{}}>
                          <Button variant="ghost" className="w-full justify-start gap-2 rounded-none text-left text-sm hover:bg-white/[0.03]">
                            <LogOut className="size-4 text-white/70" /> Cerrar sesión
                          </Button>
                        </SignOutButton>
                      </div>
                    </>
                  )}
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
