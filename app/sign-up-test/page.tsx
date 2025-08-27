"use client";

import { SignUp } from "@clerk/nextjs";

export default function SignUpTestPage() {
  return (
    <main className="min-h-[80vh] flex items-center justify-center p-6">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-black/30 p-4">
        <SignUp path="/sign-up-test" afterSignUpUrl="/dashboard" signInUrl="/sign-in" />
      </div>
    </main>
  );
}
