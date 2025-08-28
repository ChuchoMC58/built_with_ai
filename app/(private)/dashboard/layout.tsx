import { ReactNode } from "react";
import DashboardSidebar from "@/components/client/dashboard-sidebar";
import DashboardBreadcrumb from "@/components/client/dashboard-breadcrumb";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen">
      <div className="grid lg:grid-cols-[auto_1fr] lg:gap-0">
        <DashboardSidebar />
        <div className="px-4 sm:px-6 lg:px-10 py-6 sm:py-8">
          <div className="mx-auto max-w-7xl mb-4 flex items-center justify-between">
            <DashboardBreadcrumb />
            <div className="flex items-center gap-3">
              <Badge variant="secondary" className="bg-purple-500/10 text-purple-200 hover:bg-purple-500/15">
                Estás en el plan Free · Actualiza para exportar videos y más
              </Badge>
              <Button asChild className="rounded-full bg-purple-600 hover:bg-purple-500">
                <Link href="/dashboard/upgrade">Mejorar plan</Link>
              </Button>
            </div>
          </div>
          {children}
        </div>
      </div>
    </main>
  );
}
