"use client";

import PricingGrid from "@/components/client/pricing-grid";

export default function PricingPage() {
  return (
    <main className="min-h-screen px-4 sm:px-6 lg:px-10 py-10">
      {/* Navbar visible por defecto */}
      <div className="mx-auto max-w-6xl">
  <PricingGrid />
      </div>
    </main>
  );
}
