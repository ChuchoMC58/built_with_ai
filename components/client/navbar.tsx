"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";

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
        <div className="hidden md:flex items-center gap-8">
          <NavigationMenu className="text-sm text-foreground/80">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink href="#caracteristicas">Características</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#precios">Precios</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#blog">Blog</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#afiliados">Afiliados</NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="flex items-center gap-3">
            <Link href="/signup" className="text-sm text-foreground/80 hover:text-foreground">
              Iniciar sesión
            </Link>
            <Button asChild className="rounded-full">
              <Link href="/signup">Comenzar</Link>
            </Button>
          </div>
        </div>
        <div className="md:hidden flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Abrir menú">
                <MenuIcon className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 p-4 text-sm">
                <Link href="#caracteristicas">Características</Link>
                <Link href="#precios">Precios</Link>
                <Link href="#blog">Blog</Link>
                <Link href="#afiliados">Afiliados</Link>
                <div className="h-px bg-border my-2" />
                <Button asChild className="w-full">
                  <Link href="/signup">Comenzar</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
