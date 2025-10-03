import { cn } from '@/lib/utils';

export default function Logo({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      role="img"
      aria-labelledby="title desc"
      className={cn('h-8 w-8', className)}
    >
      <title id="title">Ocean Wave Logo</title>
      <desc id="desc">A stylized blue ocean wave mark with no background</desc>
      <defs>
        <linearGradient id="oceanBlue" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1E90FF" />
          <stop offset="100%" stopColor="#0266D3" />
        </linearGradient>
      </defs>

      <path
        fill="url(#oceanBlue)"
        d="M48 164
    c22-38 84-60 126-22
    c12 11 12 28 0 40
    c-26 25 -70 20 -92 6
    c18 6 44-6 44-27
    c0-24 -30-35 -58-26
    c-18 6 -30 18 -44 29
    z"
      />

      <path
        fill="url(#oceanBlue)"
        d="M182 84
    c10-7 24 5 17 16
    c-7 11 -24 5 -17-16
    z"
      />
    </svg>
  );
}