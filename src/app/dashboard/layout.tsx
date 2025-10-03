import { ReactNode } from 'react';
import AppSidebar from '@/components/layout/app-sidebar';
import { BackgroundVideo } from '@/components/layout/background-video';
import AppHeader from '@/components/layout/app-header';
import { IngestionProvider } from '@/context/ingestion-context';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <IngestionProvider>
      <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <BackgroundVideo />
        <aside className="hidden border-r bg-sidebar/80 backdrop-blur-xl md:block">
          <AppSidebar />
        </aside>
        <div className="flex flex-col">
          <AppHeader />
          <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 z-10">
            {children}
          </main>
          <footer className="p-4 text-center text-sm text-muted-foreground z-10">
            @2025 all rights reserved
          </footer>
        </div>
      </div>
    </IngestionProvider>
  );
}
