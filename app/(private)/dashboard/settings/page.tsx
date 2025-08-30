"use client";

import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function SettingsPage() {
  const { user, isLoaded } = useUser();
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [saving, setSaving] = useState(false);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    if (!isLoaded || !user) return;
    setFirstName(user.firstName ?? "");
    setEmail(user.primaryEmailAddress?.emailAddress ?? "");
    // estado de tema desde el DOM
    const hasDark = document.documentElement.classList.contains("dark");
    setDark(hasDark);
  }, [isLoaded, user]);

  const onSave = async () => {
    if (!user) return;
    try {
      setSaving(true);
      await user.update({ firstName: firstName || undefined });
    } finally {
      setSaving(false);
    }
  };

  const toggleTheme = () => {
    const el = document.documentElement;
    const next = !el.classList.contains("dark");
    el.classList.toggle("dark", next);
    setDark(next);
  };

  const initials = (user?.firstName || user?.username || "U").slice(0, 2).toUpperCase();

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div>
        <h1 className="text-xl sm:text-2xl font-semibold tracking-tight">Ajustes</h1>
        <p className="text-white/60 text-sm">Gestiona tu perfil y preferencias.</p>
      </div>

      {/* Perfil */}
      <Card className="rounded-2xl bg-white/[0.02] border-white/10">
        <CardHeader>
          <CardTitle className="text-[15px]">Perfil</CardTitle>
          <CardDescription className="text-white/60">Actualiza tu nombre visible. El correo es de solo lectura.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="flex items-center gap-4">
            <Avatar className="h-12 w-12">
              <AvatarImage src={user?.imageUrl ?? undefined} alt={firstName || "Usuario"} />
              <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>
            <div className="text-sm text-white/70 truncate">{email}</div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName">Nombre</Label>
              <Input
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Tu nombre"
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="email">Correo</Label>
              <Input id="email" value={email} readOnly className="mt-2 opacity-70" />
            </div>
          </div>

          <div className="flex justify-end">
            <Button onClick={onSave} disabled={!isLoaded || saving} className="rounded-full">
              {saving ? "Guardando…" : "Guardar cambios"}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Facturación */}
      <Card className="rounded-2xl bg-white/[0.02] border-white/10">
        <CardHeader>
          <CardTitle className="text-[15px]">Facturación</CardTitle>
          <CardDescription className="text-white/60">Consulta tu plan actual y gestiona tu suscripción.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="flex flex-wrap items-center gap-3">
            {(() => {
              const meta = (user?.publicMetadata as Record<string, unknown> | undefined);
              const planRaw = meta?.["plan"];
              const plan = typeof planRaw === "string" ? planRaw : "Free";
              return (
                <Badge variant="secondary" className="bg-purple-500/10 text-purple-200 hover:bg-purple-500/15">
                  Plan actual: {plan}
                </Badge>
              );
            })()}
            <span className="text-sm text-white/60">Créditos disponibles: 10</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild className="rounded-full bg-purple-600 hover:bg-purple-500">
              <Link href="/dashboard/upgrade">Mejorar plan</Link>
            </Button>
            <Button variant="outline" className="rounded-full border-white/15" disabled title="Próximamente">
              Gestionar facturación
            </Button>
          </div>

          <p className="text-xs text-white/50">
            Nota: la gestión de facturación (cambiar tarjeta, descargar facturas) estará disponible cuando conectemos el portal de pagos.
          </p>
        </CardContent>
      </Card>

      {/* Preferencias */}
      <Card className="rounded-2xl bg-white/[0.02] border-white/10">
        <CardHeader>
          <CardTitle className="text-[15px]">Preferencias</CardTitle>
          <CardDescription className="text-white/60">Personaliza la apariencia de la aplicación.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-medium">Tema oscuro</div>
              <div className="text-xs text-white/60">Activa o desactiva el modo oscuro.</div>
            </div>
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
        </CardContent>
      </Card>

      {/* Zona de peligro */}
      <Card className="rounded-2xl border-red-900/40 bg-red-900/5">
        <CardHeader>
          <CardTitle className="text-[15px] text-red-300">Zona peligrosa</CardTitle>
          <CardDescription className="text-white/60">Eliminar tu cuenta es irreversible.</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-end">
          <Button variant="destructive" disabled className="rounded-full">Eliminar cuenta (próximamente)</Button>
        </CardContent>
      </Card>
    </div>
  );
}
