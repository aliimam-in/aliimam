/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface DislikeRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const DislikeRounded = React.forwardRef<SVGSVGElement, DislikeRoundedProps>(
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
      <path d="M16.52 5.65002L13.42 3.25002C13.02 2.85002 12.12 2.65002 11.52 2.65002H7.72001C6.52001 2.65002 5.22001 3.55002 4.92001 4.75002L2.52001 12.05C2.02001 13.45 2.92001 14.65 4.42001 14.65H8.42001C9.02001 14.65 9.52001 15.15 9.42001 15.85L8.92001 19.05C8.72001 19.95 9.32001 20.95 10.22 21.25C11.02 21.55 12.02 21.15 12.42 20.55L16.52 14.45" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10"/>
<path d="M21.62 5.65V15.45C21.62 16.85 21.02 17.35 19.62 17.35H18.62C17.22 17.35 16.62 16.85 16.62 15.45V5.65C16.62 4.25 17.22 3.75 18.62 3.75H19.62C21.02 3.75 21.62 4.25 21.62 5.65Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
DislikeRounded.displayName = "DislikeRounded";
export const DislikeRoundedMetadata = { 
  id: "dislike_rounded", 
  baseId: "dislike", 
  variant: "rounded", 
  name: "Dislike", 
  category: "support", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default DislikeRounded;
