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
      <title id="title">Aqua Insights Logo</title>
      <desc id="desc">
        A stylized logo of ocean waves with a large cresting wave in dark blue
        and two smaller waves below it in lighter shades of blue.
      </desc>
      <defs>
        <linearGradient id="darkWave" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0A4D8F" />
          <stop offset="100%" stopColor="#063A75" />
        </linearGradient>
        <linearGradient id="midWave" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1E90FF" />
          <stop offset="100%" stopColor="#1073E1" />
        </linearGradient>
        <linearGradient id="lightWave" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#87CEEB" />
          <stop offset="100%" stopColor="#6FBEDD" />
        </linearGradient>
      </defs>
      <path
        fill="url(#lightWave)"
        d="M33.6 179.3c59-15.1 133.4-1.2 191.1 19.8 1.1-2.2 2.1-4.4 3-6.7-53.7-22.3-128.5-35.1-190.5-19-1.3-.1-2.6-.2-3.9-.2-.9 2.2-1.7 4.3-2.7 6.3z"
      />
      <path
        fill="url(#midWave)"
        d="M39.6 157.3c68-24.5 142.2-13.7 200.2 14.8-11.4-11.4-24.7-20.7-39.4-27.1-55.9-24.1-125.7-13.8-175.9 14.2-1.8 1-3.6 2-5.3 3.1 8.8-1.5 17.8-2.6 26.8-3.6 2.5-.3 5-.5 7.5-.6z"
      />
      <path
        fill="url(#darkWave)"
        d="M178.6 63.3c-41-3.1-77.3 10.3-104.9 37.3-22.7 22.2-34.3 50.8-31.9 78.4 1.3-15.8 8.4-31.1 20.4-44.4 22.3-24.6 56-38.3 93-33.1 27.2 3.8 51.5 18.2 68.3 39.5-3.3-30.8-20.4-58.4-44.9-77.7z"
      />
    </svg>
  );
}
