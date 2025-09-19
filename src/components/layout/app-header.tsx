'use client';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import AppSidebar from './app-sidebar';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

export default function AppHeader() {
  return (
    <header className="flex h-14 items-center gap-4 border-b bg-background/50 px-4 lg:h-[60px] lg:px-6 backdrop-blur-lg z-20">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="flex flex-col p-0 bg-sidebar border-r-0"
        >
          <AppSidebar />
        </SheetContent>
      </Sheet>
      <div className="w-full flex-1">{/* Placeholder for search or breadcrumbs */}</div>
      <Avatar>
        <AvatarImage src="https://picsum.photos/seed/user/40/40" alt="User" />
        <AvatarFallback>CM</AvatarFallback>
      </Avatar>
    </header>
  );
}
