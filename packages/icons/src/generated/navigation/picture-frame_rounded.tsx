/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface PictureFrameRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const PictureFrameRounded = React.forwardRef<SVGSVGElement, PictureFrameRoundedProps>(
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
      <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 2L13.95 22"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.53 12.22L2 15"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
PictureFrameRounded.displayName = "PictureFrameRounded";
export const PictureFrameRoundedMetadata = { 
  id: "picture-frame_rounded", 
  baseId: "picture-frame", 
  variant: "rounded", 
  name: "Picture Frame", 
  category: "navigation", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default PictureFrameRounded;
