import { cn } from '@/lib/utils';

export default function Logo({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      role="img"
      aria-label="Aqua Insights Logo"
      className={cn('h-8 w-8', className)}
    >
      <path d="M3 12c.83.33 1.5.83 2.24 1.5A5.02 5.02 0 0 0 7.5 15.2c.7-1.25 1.75-2.24 3-2.7.92-.34 1.93-.35 2.88-.1a4.95 4.95 0 0 1 4.12 4.1" />
      <path d="M3 7c.83.33 1.5.83 2.24 1.5A5.02 5.02 0 0 0 7.5 10.2c.7-1.25 1.75-2.24 3-2.7.92-.34 1.93-.35 2.88-.1a4.95 4.95 0 0 1 4.12 4.1" />
      <path d="M18 12h3v3" />
      <path d="M12 18h9" />
    </svg>
  );
}
