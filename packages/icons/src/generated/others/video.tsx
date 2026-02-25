/**
 * Auto-generated logo component: Video (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface VideoLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const VideoLogo = React.forwardRef<SVGSVGElement, VideoLogoProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
  <rect x="2" y="6" width="14" height="12" rx="2" />
    </svg>
  )
);

VideoLogo.displayName = "VideoLogo";

export const VideoLogoMetadata = {
  id: "video",
  baseId: "video",
  variant: "default",
  name: "Video",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default VideoLogo;
