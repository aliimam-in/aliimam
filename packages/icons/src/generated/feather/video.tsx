/**
 * Auto-generated logo component: Video (default)
 * Category: feather
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
      <polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
    </svg>
  )
);

VideoLogo.displayName = "VideoLogo";

export const VideoLogoMetadata = {
  id: "video",
  baseId: "video",
  variant: "default",
  name: "Video",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default VideoLogo;
