import { cn } from '@/lib/utils';

export default function Logo({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      role="img"
      aria-label="Aqua Insights Wave Logo"
      className={cn('h-auto', className)}
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#00BFFF', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#1E90FF', stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#1E90FF', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#00008B', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <path
        fill="url(#grad1)"
        d="M10,128 C40,70 80,70 128,128 S200,180 246,128 L246,180 C200,240 100,240 10,180 Z"
      />
      <path
        fill="url(#grad2)"
        d="M10,150 C50,110 90,110 128,150 S190,190 246,150 L246,200 C190,260 80,260 10,200 Z"
      />
      <path
        fill="none"
        stroke="#1E90FF"
        strokeWidth="5"
        d="M20,190 C80,160 160,160 236,190"
      />
      <path
        fill="none"
        stroke="#00BFFF"
        strokeWidth="5"
        d="M30,210 C90,180 170,180 226,210"
      />
    </svg>
  );
}