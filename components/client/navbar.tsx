"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-7 w-7 rounded-md bg-yellow-400" aria-hidden />
          <Link href="/" className="font-semibold tracking-tight text-lg">
            BuiltWithAI
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-foreground/80">
          <Link href="#caracteristicas" className="hover:text-foreground">
            Características
          </Link>
          <Link href="#precios" className="hover:text-foreground">
            Precios
          </Link>
          <Link href="#blog" className="hover:text-foreground">
            Blog
          </Link>
          <Link href="#afiliados" className="hover:text-foreground">
            Afiliados
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link href="#ingresar" className="hidden sm:inline text-sm text-foreground/80 hover:text-foreground">
            Iniciar sesión
          </Link>
          <Button className="rounded-full">Comenzar</Button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
