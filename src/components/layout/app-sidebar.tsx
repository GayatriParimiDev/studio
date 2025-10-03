'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  Newspaper,
  LayoutDashboard,
  Microscope,
  Unplug,
  Ship,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Logo from './logo';

const menuItems = [
  { href: '/dashboard', label: 'Ocean Viewer', icon: LayoutDashboard },
  {
    href: '/dashboard/correlation',
    label: 'Correlation Analysis',
    icon: Unplug,
    isAi: true,
  },
  { href: '/dashboard/otolith', label: 'Otolith Visualizer', icon: Microscope },
  {
    href: '/dashboard/taxonomy',
    label: 'Taxonomic Assistant',
    icon: Ship,
    isAi: true,
  },
  {
    href: '/dashboard/articles',
    label: 'Ocean Articles',
    icon: Newspaper,
    isAi: true,
  },
];

export default function AppSidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-full max-h-screen flex-col gap-2">
      <div className="flex h-14 items-center border-b border-sidebar-border px-4 lg:h-[60px] lg:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-primary"
        >
          <Logo className="h-8 w-8 text-accent" />
          <span className="">Aqua Insights</span>
        </Link>
      </div>
      <div className="flex-1">
        <nav className="grid items-start gap-1 px-2 text-sm font-medium lg:px-4">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                'flex items-center gap-3 rounded-lg px-3 py-3 text-sidebar-foreground transition-all hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
                pathname === item.href &&
                  'bg-sidebar-accent text-sidebar-accent-foreground'
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
              {item.isAi && (
                <Badge className="ml-auto flex h-5 w-auto shrink-0 items-center justify-center rounded-md border-transparent bg-accent/20 px-2 text-xs font-semibold text-accent">
                  AI
                </Badge>
              )}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
