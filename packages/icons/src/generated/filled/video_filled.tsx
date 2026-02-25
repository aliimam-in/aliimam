/**
 * Auto-generated logo component: Video (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface VideoFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const VideoFilledLogo = React.forwardRef<SVGSVGElement, VideoFilledLogoProps>(
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
      <path d="M20.117 7.625a1 1 0 0 0 -.564 .1l-4.553 2.275v4l4.553 2.275a1 1 0 0 0 1.447 -.892v-6.766a1 1 0 0 0 -.883 -.992z" />
  <path d="M5 5c-1.645 0 -3 1.355 -3 3v8c0 1.645 1.355 3 3 3h8c1.645 0 3 -1.355 3 -3v-8c0 -1.645 -1.355 -3 -3 -3z" />
    </svg>
  )
);

VideoFilledLogo.displayName = "VideoFilledLogo";

export const VideoFilledLogoMetadata = {
  id: "video_filled",
  baseId: "video",
  variant: "filled",
  name: "Video",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default VideoFilledLogo;
