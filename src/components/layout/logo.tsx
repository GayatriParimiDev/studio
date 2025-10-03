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
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#0055A4', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#00A9E0', stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#00A9E0', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#9DD7E7', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <path
        fill="url(#grad1)"
        d="M2.3,139.1c38.1-17.2,81-25.8,125.1-25.8c42.3,0,82.6,8,120.3,23.9l-3.3-25.1C202,99.3,158,89.5,114.9,89.5 c-45.5,0-89.9,10.6-130.3,31.7L2.3,139.1z"
      />
      <path
        fill="url(#grad2)"
        d="M125.2,143.4c-42.3,0-82.6-8-120.3-23.9c-5.8-2.6-11.5-5.3-17-8.2l9.6-23.9c41.6,20.2,85.1,30.3,127.7,30.3 c44.1,0,88.1-9.8,129.5-29.4l4,24.8C213.3,136,170.8,143.4,125.2,143.4z"
      />
      <path
        fill="#00A9E0"
        d="M255.4,166.1c-37.1,15.2-77.9,22.8-120.3,22.8c-45.5,0-89.9-10.6-130.3-31.7l-4.8,18.1 c41.6,20.2,85.1,30.3,127.7,30.3c44.1,0,88.1-9.8,129.5-29.4L255.4,166.1z"
      />
    </svg>
  );
}
