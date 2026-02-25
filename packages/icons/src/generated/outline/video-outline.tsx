/**
 * Auto-generated logo component: Video Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface VideoOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const VideoOutlineLogo = React.forwardRef<SVGSVGElement, VideoOutlineLogoProps>(
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
      <path d="M15 10l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -1.447 .894l-4.553 -2.276v-4" />
  <path d="M3 8a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2l0 -8" />
    </svg>
  )
);

VideoOutlineLogo.displayName = "VideoOutlineLogo";

export const VideoOutlineLogoMetadata = {
  id: "video-outline",
  baseId: "video-outline",
  variant: "default",
  name: "Video Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default VideoOutlineLogo;
