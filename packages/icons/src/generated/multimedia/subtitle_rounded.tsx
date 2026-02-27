/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SubtitleRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SubtitleRounded = React.forwardRef<SVGSVGElement, SubtitleRoundedProps>(
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
<path d="M17.4999 17.08H15.6499"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.97 17.08H6.5"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.5 13.32H11.97"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.27 13.32H6.5"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
SubtitleRounded.displayName = "SubtitleRounded";
export const SubtitleRoundedMetadata = { 
  id: "subtitle_rounded", 
  baseId: "subtitle", 
  variant: "rounded", 
  name: "Subtitle", 
  category: "multimedia", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SubtitleRounded;
