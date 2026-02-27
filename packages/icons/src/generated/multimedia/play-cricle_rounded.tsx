/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface PlayCricleRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const PlayCricleRounded = React.forwardRef<SVGSVGElement, PlayCricleRoundedProps>(
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
      <path d="M19.0701 19.07C22.9801 15.16 22.9801 8.82999 19.0701 4.92999" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.93006 4.92999C1.02006 8.83999 1.02006 15.17 4.93006 19.07" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.69995 21.41C9.76995 21.78 10.8799 21.96 11.9999 21.96C13.1199 21.95 14.2299 21.78 15.2999 21.41" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.69995 2.59003C9.76995 2.22003 10.8799 2.03998 11.9999 2.03998C13.1199 2.03998 14.2299 2.22003 15.2999 2.59003" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.73999 12V10.33C8.73999 8.25003 10.21 7.40002 12.01 8.44002L13.46 9.28005L14.91 10.12C16.71 11.16 16.71 12.86 14.91 13.9L13.46 14.74L12.01 15.58C10.21 16.62 8.73999 15.77 8.73999 13.69V12Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
PlayCricleRounded.displayName = "PlayCricleRounded";
export const PlayCricleRoundedMetadata = { 
  id: "play-cricle_rounded", 
  baseId: "play-cricle", 
  variant: "rounded", 
  name: "Play Cricle", 
  category: "multimedia", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default PlayCricleRounded;
