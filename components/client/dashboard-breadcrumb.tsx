"use client";

import { LayoutGrid } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardBreadcrumb() {
  const pathname = usePathname();
  // Expect paths like /dashboard, /dashboard/upgrade, /dashboard/videos/123
  const parts = (pathname || "/dashboard").split("/").filter(Boolean);
  const idxDashboard = parts.indexOf("dashboard");
  const tail = idxDashboard >= 0 ? parts.slice(idxDashboard + 1) : [];

  const segments = [
    { label: "Dashboard", href: "/dashboard" },
    ...tail.map((seg, i) => ({
      label: decodeURIComponent(seg),
      href: "/" + parts.slice(0, idxDashboard + 1 + i + 1).join("/"),
    })),
  ];

  return (
    <div className="flex items-center gap-2 text-sm">
      <div className="flex items-center justify-center h-6 w-6 rounded-md bg-white/5 border border-white/10">
        <LayoutGrid className="size-3.5 text-white/70" />
      </div>
      <span className="text-white/30">|</span>
      <nav className="flex items-center gap-2">
        {segments.map((s, i) => {
          const isLast = i === segments.length - 1;
          return (
            <div key={s.href} className="flex items-center gap-2">
              {isLast ? (
                <span className="font-semibold text-white">{s.label}</span>
              ) : (
                <Link href={s.href} className="text-white/80 hover:text-white">
                  {s.label}
                </Link>
              )}
              {!isLast && <span className="text-white/40">›</span>}
            </div>
          );
        })}
      </nav>
    </div>
  );
}
