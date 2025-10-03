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
      <desc id="desc">A stylized blue ocean wave with multiple shades of blue, cresting to the right.</desc>
      <defs>
        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#005C97" />
          <stop offset="100%" stopColor="#363795" />
        </linearGradient>
        <linearGradient id="midWaveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0072B5" />
          <stop offset="100%" stopColor="#4D6CAC" />
        </linearGradient>
        <linearGradient id="frontWaveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#36A4D8" />
          <stop offset="100%" stopColor="#7DA4CC" />
        </linearGradient>
        <linearGradient id="bottomWave1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00AEEF" />
          <stop offset="100%" stopColor="#87CEEB" />
        </linearGradient>
         <linearGradient id="bottomWave2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#87CEEB" />
          <stop offset="100%" stopColor="#B0E0E6" />
        </linearGradient>
      </defs>

      {/* <!-- Bottom Wave --> */}
      <path
        fill="url(#bottomWave2)"
        d="M24.4,204.1c48.8-16,155.3-20.6,211.6,23.9c2.3-3.6,4.5-7.3,6.5-11.2C208,188,103.3,189.6,41.9,207.2C35.8,206.1,29.9,205.1,24.4,204.1z"
      />
      <path
        fill="url(#bottomWave1)"
        d="M17.1,170.8c50.1-10.4,136.1-10,195.4,15.2c-7.9-10-17.4-18.3-28.2-24.8C136,143.5,63.2,148.4,17.1,170.8z"
      />

      {/* <!-- Main Wave --> */}
      <path
        fill="url(#waveGradient)"
        d="M208.6,83.5c-30.9,0-57.2,12.5-76.5,35.2c-15.3,18-24.5,38.8-26.6,59.3c-0.1,0.8-0.2,1.6-0.2,2.4c36.3-43.9,94-52.9,139.7-27.1C242.9,150.3,243.6,108.7,208.6,83.5z"
      />
      <path
        fill="url(#midWaveGradient)"
        d="M192,109.3c-23.7,0-44.4,9.6-59.5,27.1c-13.3,15.4-21,33.1-22.9,50.7c29.1-34.9,74.7-41.9,111.4-21.7C218.4,149.2,217.1,123.6,192,109.3z"
      />
      <path
        fill="url(#frontWaveGradient)"
        d="M176.6,132.8c-18.4,0-34.7,7.3-46.6,20.8c-10.9,12.2-17.4,26.4-18.9,41.1c22.3-26.4,57.1-31.5,85.3-16.5C193.3,165.6,190.9,145.9,176.6,132.8z"
      />
    </svg>
  );
}
