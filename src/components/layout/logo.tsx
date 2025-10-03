import { cn } from '@/lib/utils';

export default function Logo({ className }: { className?: string }) {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('h-8 w-8 text-primary', className)}
    >
      <path
        d="M32 5.33331C17.28 5.33331 5.33337 17.28 5.33337 32C5.33337 46.72 17.28 58.6666 32 58.6666C46.72 58.6666 58.6667 46.72 58.6667 32C58.6667 17.28 46.72 5.33331 32 5.33331Z"
        stroke="hsl(var(--primary))"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.3334 34.6667C21.3334 34.6667 24 37.3333 26.6667 37.3333C29.3334 37.3333 32 32 32 32C32 32 34.6667 26.6667 37.3334 26.6667C40 26.6667 42.6667 29.3333 42.6667 29.3333"
        stroke="hsl(var(--accent))"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26.6667 42.6667C26.6667 42.6667 29.3333 45.3333 32 45.3333C34.6667 45.3333 37.3333 40 37.3333 40"
        stroke="hsl(var(--accent))"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
