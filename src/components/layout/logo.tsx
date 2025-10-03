import { cn } from '@/lib/utils';

export default function Logo({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 160"
      role="img"
      aria-label="Aqua Insights Wave Logo"
      className={cn('h-auto', className)}
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#0A4B8D', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#1E90FF', stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#1E90FF', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#46B3FF', stopOpacity: 1 }} />
        </linearGradient>
         <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#46B3FF', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#87CEFA', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <path
        fill="url(#grad3)"
        d="M255.4,142.3c-28.5-7.8-59.3-11.7-91.2-11.7c-37.7,0-72.9,7.1-104.2,21.4C37,162.5,0,158.9,0,158.9l12.4-23.4c29.1-12.9,64-19.4,100.8-19.4c31,0,61.5,5.1,90,15.2C231.8,141.4,255.4,142.3,255.4,142.3z"
      />
      <path
        fill="url(#grad2)"
        d="M256,112.5c-28.9-10-60-15-92.4-15c-40,0-76.3,8.3-107.6,25C34.9,132.8,0,129,0,129l10.2-22.3c32.5-14.7,70.6-22.2,111.4-22.2c33.3,0,65.3,5.9,94.9,17.7C240.2,109.9,256,112.5,256,112.5z"
      />
      <path
        fill="url(#grad1)"
        d="M178.1,9.9C157.9,5.1,136.3,2.5,114,2.5c-43.8,0-82.9,10.2-114,30.5l9.2-22.8C42.8,3.1,77.8,0,114,0c23.9,0,46.8,2.7,68.2,8.1c21.8,5.5,41.2,14,57.4,25.2c-1.8-1-3.6-2-5.5-2.9C216.5,22.2,197.8,14.6,178.1,9.9z"
      />
      <path
        fill="url(#grad1)"
        d="M217.4,76.4c-10.3-10.3-22.2-18.4-35.2-24.1c-3.3-1.4-6.6-2.8-10-4.1c-14.9-5.7-30.8-8.6-47.3-8.6c-43.8,0-82.9,10.2-114,30.5l9.2-22.8c32.6-21.4,74-32.3,119.8-32.3c20.3,0,40.2,3.1,59.2,9.2c16.2,5.2,31.3,12.5,45.1,21.8c13.5,9.1,25.2,20,34.9,32.7c0,0,0.1,0.1,0.1,0.1C250.2,94.8,234.3,86.2,217.4,76.4z"
      />
      <path
        fill="url(#grad2)"
        d="M208.5,108.6c-13.8-9.3-28.9-16.6-45.1-21.8C144.1,80,124.2,77,103.9,77C68.1,77,32.8,84.1,0,94.6L10,72.7c31.3-16.7,67.6-25,107.6-25c16.5,0,32.4,2.9,47.3,8.6c3.4,1.3,6.8,2.7,10,4.1c13,5.7,24.9,13.8,35.2,24.1c16.9,9.8,32.8,18.4,41.9,23.1L208.5,108.6z"
      />
    </svg>
  );
}
