/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface YoutubeRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const YoutubeRounded = React.forwardRef<SVGSVGElement, YoutubeRoundedProps>(
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
      <path d="M17 20H7C4 20 2 18 2 15V9C2 6 4 4 7 4H17C20 4 22 6 22 9V15C22 18 20 20 17 20Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.4001 9.5L13.9001 11C14.8001 11.6 14.8001 12.5 13.9001 13.1L11.4001 14.6C10.4001 15.2 9.6001 14.7 9.6001 13.6V10.6C9.6001 9.3 10.4001 8.9 11.4001 9.5Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
YoutubeRounded.displayName = "YoutubeRounded";
export const YoutubeRoundedMetadata = { 
  id: "youtube_rounded", 
  baseId: "youtube", 
  variant: "rounded", 
  name: "Youtube", 
  category: "brand", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default YoutubeRounded;
