/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Link2RoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Link2Rounded = React.forwardRef<SVGSVGElement, Link2RoundedProps>(
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
      <path d="M13.5 12C13.5 15.18 10.93 17.75 7.75 17.75C4.57 17.75 2 15.18 2 12C2 8.82 4.57 6.25 7.75 6.25"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 12C10 8.69 12.69 6 16 6C19.31 6 22 8.69 22 12C22 15.31 19.31 18 16 18"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
Link2Rounded.displayName = "Link2Rounded";
export const Link2RoundedMetadata = { 
  id: "link-2_rounded", 
  baseId: "link-2", 
  variant: "rounded", 
  name: "Link 2", 
  category: "text", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Link2Rounded;
