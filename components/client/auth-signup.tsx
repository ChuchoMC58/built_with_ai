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
import { useSignUp, useClerk, useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Link from "next/link";

const baseSchema = z.object({
  name: z.string().min(2, "Ingresa tu nombre"),
  email: z.string().email("Correo inválido"),
  password: z.string().min(6, "Mínimo 6 caracteres"),
});

const codeSchema = z.object({
  code: z.string().min(6, "Código de 6 dígitos"),
});

const schema = z.union([baseSchema, codeSchema]);

type FormValues = z.infer<typeof schema> & {
  name?: string;
  email?: string;
  password?: string;
  code?: string;
};

export default function AuthSignup() {
  const [showPassword, setShowPassword] = useState(false);
  const [pendingVerification, setPendingVerification] = useState(false);
  const { signUp, isLoaded } = useSignUp();
  const { setActive } = useClerk();
  const { signIn, isLoaded: isSignInLoaded } = useSignIn();
  const router = useRouter();

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", password: "", code: "" },
    mode: "onTouched",
  });

  const onSubmit = async (values: FormValues) => {
    if (!isLoaded) return;

    try {
      if (!pendingVerification) {
        // Paso 1: crear cuenta y enviar código por email
        await signUp.create({
          emailAddress: values.email!,
          password: values.password!,
          firstName: values.name,
        });
        await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
        setPendingVerification(true);
        return;
      }

      // Paso 2: verificar código y activar sesión
      const attempt = await signUp.attemptEmailAddressVerification({ code: values.code! });
      if (attempt.status === "complete") {
        await setActive({ session: attempt.createdSessionId });
        router.push("/dashboard");
      }
    } catch (err) {
      // Muestra el mensaje de error en el primer campo
      const e = err as { errors?: { message?: string }[] } | undefined;
      const message = e?.errors?.[0]?.message ?? "Ocurrió un error";
      form.setError(pendingVerification ? "code" : "email", { message });
    }
  };

  return (
    <div className="text-left">
      <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-8">Regístrate para crear una cuenta</h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {!pendingVerification && (
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs text-white/70">Nombre completo</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Manu Arora"
                    className="h-11 rounded-full bg-white/[0.06] border-white/10 placeholder:text-white/45 shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          )}

          {!pendingVerification && (
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
          )}

          {!pendingVerification && (
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
          )}

          {pendingVerification && (
            <FormField
              control={form.control}
              name="code"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs text-white/70">Código de verificación (enviado a tu correo)</FormLabel>
                  <FormControl>
                    <Input
                      inputMode="numeric"
                      placeholder="123456"
                      className="h-11 rounded-full bg-white/[0.06] border-white/10 placeholder:text-white/45"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          <Button type="submit" className="w-full rounded-full" disabled={!isLoaded}>
            {pendingVerification ? "Verificar código" : "Crear cuenta"}
          </Button>

          <p className="text-center text-xs text-white/60">
            ¿Ya tienes una cuenta? <Link href="/sign-in" className="text-white hover:underline">Inicia sesión</Link>
          </p>

          {!pendingVerification && (
            <>
              <div className="flex items-center gap-4 py-2">
                <div className="h-px flex-1 bg-white/10" />
                <span className="text-xs text-white/40">o continúa con</span>
                <div className="h-px flex-1 bg-white/10" />
              </div>

              <Button
                type="button"
                onClick={async () => {
                  if (!isSignInLoaded) return;
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
            </>
          )}

          <FormDescription className="mt-6 text-center text-[11px] leading-relaxed text-white/50">
            Al registrarte aceptas nuestros <a className="underline hover:text-white" href="#">Términos de Servicio</a> y la <a className="underline hover:text-white" href="#">Política de Privacidad</a>.
          </FormDescription>
        </form>
      </Form>
    </div>
  );
}
