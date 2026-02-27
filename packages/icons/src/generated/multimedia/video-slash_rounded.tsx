/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface VideoSlashRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const VideoSlashRounded = React.forwardRef<SVGSVGElement, VideoSlashRoundedProps>(
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
      <path d="M16.63 7.57996C16.63 7.57996 16.66 6.62996 16.63 6.31996C16.46 4.27996 15.13 3.57996 12.52 3.57996H6.21C3.05 3.57996 2 4.62996 2 7.78996V16.21C2 17.47 2.38 18.74 3.37 19.55L4 20" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.74 10.95V16.21C16.74 19.37 15.69 20.42 12.53 20.42H7.26001" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 6.73999V15.81C22 17.48 20.88 18.06 19.52 17.1L16.74 15.15" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22.02 2.18994L2.02002 22.1899" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
VideoSlashRounded.displayName = "VideoSlashRounded";
export const VideoSlashRoundedMetadata = { 
  id: "video-slash_rounded", 
  baseId: "video-slash", 
  variant: "rounded", 
  name: "Video Slash", 
  category: "multimedia", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default VideoSlashRounded;
