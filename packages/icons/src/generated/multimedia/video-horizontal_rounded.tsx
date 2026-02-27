/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface VideoHorizontalRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const VideoHorizontalRounded = React.forwardRef<SVGSVGElement, VideoHorizontalRoundedProps>(
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
      <path d="M22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2.52002 17.11H21.48"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2.52002 7.10999H21.48"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.96997 17.11V21.46"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 17.11V21.97"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.97 17.11V21.52"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.96997 2.10999V6.45999"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 2.10999V6.96999"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 7.03003V18.03"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.97 2.10999V6.51999"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
VideoHorizontalRounded.displayName = "VideoHorizontalRounded";
export const VideoHorizontalRoundedMetadata = { 
  id: "video-horizontal_rounded", 
  baseId: "video-horizontal", 
  variant: "rounded", 
  name: "Video Horizontal", 
  category: "multimedia", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default VideoHorizontalRounded;
