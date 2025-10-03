import { cn } from '@/lib/utils';

export default function Logo({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      role="img"
      aria-label="Aqua Insights Wave Logo"
      className={cn('h-8 w-8', className)}
    >
      <path d="M3 12c4.25-2.25 7.75-2.25 12 0" />
      <path d="M3 7c4.25-2.25 7.75-2.25 12 0" />
      <path d="M3 17c4.25-2.25 7.75-2.25 12 0" />
      <path d="M18 12c2.5-1.5 4-1.5 4 0 0 1.5-1.5 1.5-4 0" />
      <path d="M18 7c2.5-1.5 4-1.5 4 0 0 1.5-1.5 1.5-4 0" />
      <path d="M18 17c2.5-1.5 4-1.5 4 0 0 1.5-1.5 1.5-4 0" />
    </svg>
  );
}
