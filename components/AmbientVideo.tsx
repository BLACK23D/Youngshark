"use client";

import { useEffect, useRef, useState } from "react";

type NetworkNavigator = Navigator & {
  connection?: { saveData?: boolean };
};

type AmbientVideoProps = {
  desktopSrc: string;
  mobileSrc: string;
  poster: string;
  className: string;
  priority?: boolean;
};

export function AmbientVideo({
  desktopSrc,
  mobileSrc,
  poster,
  className,
  priority = false,
}: AmbientVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const inViewRef = useRef(priority);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const saveData = (navigator as NetworkNavigator).connection?.saveData;
    if (reducedMotion || saveData) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        inViewRef.current = entry.isIntersecting;
        if (entry.isIntersecting) {
          setShouldLoad(true);
          void video.play().catch(() => undefined);
        } else {
          video.pause();
        }
      },
      { rootMargin: "280px 0px", threshold: 0.05 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [priority]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !shouldLoad) return;
    video.load();
    if (inViewRef.current) void video.play().catch(() => undefined);
  }, [shouldLoad]);

  return (
    <video
      ref={videoRef}
      className={className}
      poster={poster}
      muted
      loop
      playsInline
      preload={priority ? "metadata" : "none"}
      aria-hidden="true"
    >
      {shouldLoad ? (
        <>
          <source media="(max-width: 767px)" src={mobileSrc} type="video/mp4" />
          <source src={desktopSrc} type="video/mp4" />
        </>
      ) : null}
    </video>
  );
}
