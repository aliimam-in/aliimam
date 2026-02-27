/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ManRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ManRounded = React.forwardRef<SVGSVGElement, ManRoundedProps>(
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
      <path d="M10.25 21.5C14.5302 21.5 18 18.0302 18 13.75C18 9.46979 14.5302 6 10.25 6C5.96979 6 2.5 9.46979 2.5 13.75C2.5 18.0302 5.96979 21.5 10.25 21.5Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21.5 2.5L16 8"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 2.5H21.5V9"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
ManRounded.displayName = "ManRounded";
export const ManRoundedMetadata = { 
  id: "man_rounded", 
  baseId: "man", 
  variant: "rounded", 
  name: "Man", 
  category: "gender", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ManRounded;
