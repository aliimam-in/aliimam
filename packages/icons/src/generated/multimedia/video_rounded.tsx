/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface VideoRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const VideoRounded = React.forwardRef<SVGSVGElement, VideoRoundedProps>(
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
      <path d="M12.53 20.42H6.21C3.05 20.42 2 18.32 2 16.21V7.78996C2 4.62996 3.05 3.57996 6.21 3.57996H12.53C15.69 3.57996 16.74 4.62996 16.74 7.78996V16.21C16.74 19.37 15.68 20.42 12.53 20.42Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.52 17.1L16.74 15.15V8.84001L19.52 6.89001C20.88 5.94001 22 6.52001 22 8.19001V15.81C22 17.48 20.88 18.06 19.52 17.1Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.5 11C12.3284 11 13 10.3284 13 9.5C13 8.67157 12.3284 8 11.5 8C10.6716 8 10 8.67157 10 9.5C10 10.3284 10.6716 11 11.5 11Z"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
VideoRounded.displayName = "VideoRounded";
export const VideoRoundedMetadata = { 
  id: "video_rounded", 
  baseId: "video", 
  variant: "rounded", 
  name: "Video", 
  category: "multimedia", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default VideoRounded;
