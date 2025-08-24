"use client";

import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useSignIn, useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const schema = z.object({
  email: z.string().email("Correo inválido"),
  password: z.string().min(6, "Mínimo 6 caracteres"),
});

type FormValues = z.infer<typeof schema>;

export default function AuthSignin() {
  const [showPassword, setShowPassword] = useState(false);
  const { signIn, isLoaded } = useSignIn();
  const { setActive } = useClerk();
  const router = useRouter();

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { email: "", password: "" },
    mode: "onTouched",
  });

  const onSubmit = async (values: FormValues) => {
    if (!isLoaded) return;
    try {
      const res = await signIn!.create({
        identifier: values.email,
        password: values.password,
      });
      if (res.status === "complete") {
        await setActive({ session: res.createdSessionId });
        router.push("/dashboard");
      } else {
        // MFA u otros pasos
        form.setError("email", { message: "Se requiere un paso adicional para iniciar sesión." });
      }
    } catch (err: any) {
      const message = err?.errors?.[0]?.message ?? "Credenciales inválidas";
      form.setError("password", { message });
    }
  };

  return (
    <div className="text-left">
      <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-8">Inicia sesión en tu cuenta</h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs text-white/70">Correo electrónico</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="hello@johndoe.com"
                    className="h-11 rounded-full bg-white/[0.06] border-white/10 placeholder:text-white/45 shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs text-white/70">Contraseña</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      className="h-11 rounded-full bg-white/[0.06] border-white/10 pr-10 placeholder:text-white/45 shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset]"
                      {...field}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((v) => !v)}
                      className="absolute inset-y-0 right-3 my-auto text-white/60 hover:text-white/80"
                      aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                    >
                      {showPassword ? "🙈" : "👁️"}
                    </button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full rounded-full" disabled={!isLoaded}>
            Iniciar sesión
          </Button>

          <p className="text-center text-xs text-white/60">
            ¿No tienes cuenta? <a href="/sign-up" className="text-white hover:underline">Regístrate</a>
          </p>

          <div className="flex items-center gap-4 py-2">
            <div className="h-px flex-1 bg-white/10" />
            <span className="text-xs text-white/40">o continúa con</span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <Button
            type="button"
            onClick={async () => {
              if (!isLoaded) return;
              await signIn?.authenticateWithRedirect({
                strategy: "oauth_google",
                redirectUrl: "/sso-callback",
                redirectUrlComplete: "/dashboard",
              });
            }}
            variant="outline"
            className="w-full rounded-full border-white/15 bg-white/5 hover:bg-white/10"
          >
            <span className="mr-3 inline-flex h-4 w-4 items-center justify-center rounded-sm bg-white/80 text-[#4285F4]">G</span>
            Google
          </Button>

          <FormDescription className="mt-6 text-center text-[11px] leading-relaxed text-white/50">
            Al iniciar sesión aceptas nuestros <a className="underline hover:text-white" href="#">Términos de Servicio</a> y la <a className="underline hover:text-white" href="#">Política de Privacidad</a>.
          </FormDescription>
        </form>
      </Form>
    </div>
  );
}
