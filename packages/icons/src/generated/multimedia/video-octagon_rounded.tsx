/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface VideoOctagonRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const VideoOctagonRounded = React.forwardRef<SVGSVGElement, VideoOctagonRoundedProps>(
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
      <path d="M21.0799 8.58003V15.42C21.0799 16.54 20.4799 17.58 19.5099 18.15L13.5699 21.58C12.5999 22.14 11.3999 22.14 10.4199 21.58L4.47992 18.15C3.50992 17.59 2.90991 16.55 2.90991 15.42V8.58003C2.90991 7.46003 3.50992 6.41999 4.47992 5.84999L10.4199 2.42C11.3899 1.86 12.5899 1.86 13.5699 2.42L19.5099 5.84999C20.4799 6.41999 21.0799 7.45003 21.0799 8.58003Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.75 12V10.8C9.75 9.26001 10.84 8.63005 12.17 9.40005L13.21 10L14.25 10.6C15.58 11.37 15.58 12.63 14.25 13.4L13.21 14L12.17 14.6C10.84 15.37 9.75 14.74 9.75 13.2V12Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
VideoOctagonRounded.displayName = "VideoOctagonRounded";
export const VideoOctagonRoundedMetadata = { 
  id: "video-octagon_rounded", 
  baseId: "video-octagon", 
  variant: "rounded", 
  name: "Video Octagon", 
  category: "multimedia", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default VideoOctagonRounded;
