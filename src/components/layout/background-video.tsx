'use client';

export function BackgroundVideo() {
  const videoUrl = "https://videos.pexels.com/video-files/3765078/3765078-hd_1920_1080_30fps.mp4";
  return (
    <div className="fixed inset-0 -z-10">
      <video
        key={videoUrl}
        autoPlay
        loop
        muted
        playsInline
        className="h-full w-full object-cover"
        poster="https://picsum.photos/seed/oceanbg/1920/1080"
      >
        <source
          src={videoUrl}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
    </div>
  );
}
