"use client";

import { useState, useCallback } from "react";
import clsx from "clsx";

type LiteYouTubeProps = {
  id: string; // YouTube video ID
  title: string;
  className?: string;
};

export default function LiteYouTube({ id, title, className }: LiteYouTubeProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const onPlay = useCallback(() => {
    setIsPlaying(true);
  }, []);

  // Use the privacy-enhanced domain to reduce cookies until interaction
  const iframeSrc = `https://www.youtube-nocookie.com/embed/${id}`;

  return (
    <div className={clsx("relative aspect-video w-full bg-black overflow-hidden", className)}>
      {isPlaying ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={iframeSrc}
          title={title}
          // Intentionally omit allow to avoid Feature Policy warnings on some browsers
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          aria-label={`Reproducir: ${title}`}
          onClick={onPlay}
          className="group absolute inset-0 h-full w-full"
        >
          {/* Thumbnail */}
          <div
            className="absolute inset-0 bg-center bg-cover"
            style={{ backgroundImage: `url(https://i.ytimg.com/vi/${id}/hqdefault.jpg)` }}
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="inline-flex items-center justify-center rounded-full bg-white/90 text-black w-16 h-16 shadow-lg ring-1 ring-black/10 transition-transform duration-200 group-hover:scale-105">
              {/* Triangle play icon */}
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </div>
        </button>
      )}
    </div>
  );
}
