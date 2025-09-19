'use client';

export function BackgroundVideo() {
  return (
    <div className="fixed inset-0 -z-10">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="h-full w-full object-cover"
        poster="https://picsum.photos/seed/oceanbg/1920/1080"
      >
        <source
          src="https://videos.pexels.com/video-files/3845800/3845800-hd_1920_1080_25fps.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
    </div>
  );
}
