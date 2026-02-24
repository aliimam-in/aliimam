/**
 * Auto-generated logo component: Youtube (music)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface YoutubeMusicProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const YoutubeMusic = React.forwardRef<SVGSVGElement, YoutubeMusicProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 192 192"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="none" d="M0 0h192v192H0z" /><circle cx="96" cy="96" r="88" fill="red" /><path fill="#FFF" d="M96 50.32c25.19 0 45.68 20.49 45.68 45.68S121.19 141.68 96 141.68 50.32 121.19 50.32 96 70.81 50.32 96 50.32m0-6.4c-28.76 0-52.08 23.32-52.08 52.08 0 28.76 23.32 52.08 52.08 52.08s52.08-23.32 52.08-52.08c0-28.76-23.32-52.08-52.08-52.08z" /><path fill="#FFF" d="m79 122 45-26-45-26z" />
    </svg>
  )
);

YoutubeMusic.displayName = "YoutubeMusic";

export const YoutubeMusicMetadata = {
  id: "youtube_music",
  baseId: "youtube",
  variant: "music",
  name: "Youtube",
  category: "mix",
  tags: [],
  viewBox: "0 0 192 192",
} as const;

export default YoutubeMusic;
