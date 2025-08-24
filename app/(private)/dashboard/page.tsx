import { currentUser } from "@clerk/nextjs/server";
import SignOutAction from "@/components/client/signout-button";

export default async function DashboardPage() {
  const user = await currentUser();
  return (
    <main className="min-h-screen px-6 py-16">
      {/* Oculta el navbar en dashboard */}
      <style>{`header.sticky{display:none!important}`}</style>
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-tight">Dashboard</h1>
        <p className="mt-2 text-white/70">Sesión activa para: {user?.id ?? "(no autenticado)"}</p>
        <div className="mt-8 rounded-lg border border-white/10 p-6">
          <p>Contenido de prueba. Redirección desde el registro correcta.</p>
        </div>
        <div className="mt-8">
          <SignOutAction />
        </div>
      </div>
    </main>
  );
}
