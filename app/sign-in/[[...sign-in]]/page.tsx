import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import AuthSignin from "@/components/client/auth-signin";

export default function Page() {
  return (
    <main className="min-h-screen w-full grid grid-cols-1 lg:grid-cols-2">
      {/* Oculta el navbar en esta ruta */}
      <style>{`header.sticky{display:none!important}`}</style>
      {/* Columna izquierda: formulario */}
      <section className="relative flex items-center justify-center bg-black p-6 sm:p-10">
        <div className="w-full max-w-md">
          <AuthSignin />
        </div>
      </section>

      {/* Columna derecha: confianza / prueba social */}
      <section className="relative hidden lg:block bg-neutral-950/40 border-l border-white/10">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to_right, rgba(255,255,255,.06) 0 1px, transparent 1px 120px), repeating-linear-gradient(to_bottom, rgba(255,255,255,.06) 0 1px, transparent 1px 120px)",
          }}
        />
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 border-l border-dashed border-white/20" />
          <div className="absolute top-1/2 left-0 w-full h-px -translate-y-1/2 border-t border-dashed border-white/20" />
        </div>
        <div className="relative h-full w-full flex items-center justify-center p-6">
          <div className="max-w-lg w-full">
            <h2 className="text-2xl font-semibold tracking-tight mb-2">Vuelve a crear con IA</h2>
            <p className="text-sm text-white/70 leading-relaxed max-w-prose mb-6">
              Accede a tus proyectos y continúa donde lo dejaste. Rápido, seguro y sin fricción.
            </p>
            <div className="mb-6 inline-flex items-center gap-4 rounded-full bg-white/[0.06] px-4 py-2 shadow-sm ring-1 ring-white/10 backdrop-blur">
              <div className="-ml-1 flex -space-x-3">
                {Array.from({ length: 6 }).map((_, i) => (
                  <Avatar key={i} className="h-8 w-8 ring-2 ring-neutral-900">
                    <AvatarImage src="/globe.svg" alt="avatar" />
                    <AvatarFallback>SS</AvatarFallback>
                  </Avatar>
                ))}
              </div>
              <div className="flex items-center gap-1 text-yellow-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                    <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.786 1.401 8.168L12 18.896l-7.335 3.868 1.4-8.168L.132 9.21l8.2-1.192z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-xs text-white/60">Con la confianza de más de 27,000 creadores</p>
          </div>
        </div>
      </section>
    </main>
  );
}