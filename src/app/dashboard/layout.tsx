import { ReactNode } from 'react';
import AppSidebar from '@/components/layout/app-sidebar';
import { BackgroundVideo } from '@/components/layout/background-video';
import AppHeader from '@/components/layout/app-header';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <BackgroundVideo />
      <aside className="hidden border-r bg-sidebar/50 backdrop-blur-md md:block">
        <AppSidebar />
      </aside>
      <div className="flex flex-col">
        <AppHeader />
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 z-10">
          {children}
        </main>
      </div>
    </div>
  );
}
