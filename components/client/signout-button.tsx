"use client";

import { SignOutButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export function SignOutAction() {
  return (
    <SignOutButton>
      <Button variant="outline" className="rounded-full border-white/20">
        Cerrar sesión
      </Button>
    </SignOutButton>
  );
}

export default SignOutAction;
