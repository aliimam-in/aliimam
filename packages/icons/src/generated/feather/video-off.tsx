/**
 * Auto-generated logo component: Video Off (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface VideoOffLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const VideoOffLogo = React.forwardRef<SVGSVGElement, VideoOffLogoProps>(
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
      <path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"/><line x1="1" y1="1" x2="23" y2="23"/>
    </svg>
  )
);

VideoOffLogo.displayName = "VideoOffLogo";

export const VideoOffLogoMetadata = {
  id: "video-off",
  baseId: "video-off",
  variant: "default",
  name: "Video Off",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default VideoOffLogo;
