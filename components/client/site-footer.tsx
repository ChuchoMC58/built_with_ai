"use client";

import { Badge } from "@/components/ui/badge";

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div>
          <p className="text-lg font-semibold">StoryShort</p>
          <p className="mt-2 text-sm text-foreground/70">Copyright © 2024 StoryShort</p>
          <p className="text-sm text-foreground/70">All rights reserved</p>
        </div>
        <div className="grid grid-cols-2 gap-8 lg:col-span-2">
          <div className="space-y-2 text-sm">
            <p className="text-foreground">Pricing</p>
            <p className="text-foreground/70">Blog</p>
            <p className="text-foreground/70">Contact</p>
            <div className="flex items-center gap-2 text-foreground/70">
              Programa de Afiliados <Badge className="bg-white/10 border-white/10">NEW</Badge>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <p className="text-foreground">Privacy Policy</p>
            <p className="text-foreground/70">Terms of Service</p>
            <p className="text-foreground/70">Refund Policy</p>
          </div>
          <div className="space-y-2 text-sm">
            <p className="text-foreground">Twitter</p>
            <p className="text-foreground/70">LinkedIn</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
