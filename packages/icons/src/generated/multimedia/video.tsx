/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface VideoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Video = React.forwardRef<SVGSVGElement, VideoProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
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
Video.displayName = "Video";
export const VideoMetadata = { 
  id: "video", 
  baseId: "video", 
  variant: "default", 
  name: "Video", 
  category: "multimedia", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Video;
