/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MainComponentRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MainComponentRounded = React.forwardRef<SVGSVGElement, MainComponentRoundedProps>(
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
      <path d="M20.95 14.55L14.56 20.94C13.16 22.34 10.86 22.34 9.45002 20.94L3.06001 14.55C1.66001 13.15 1.66001 10.85 3.06001 9.44001L9.45002 3.05C10.85 1.65 13.15 1.65 14.56 3.05L20.95 9.44001C22.35 10.85 22.35 13.15 20.95 14.55Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.25 6.25L17.75 17.75"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.75 6.25L6.25 17.75"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
MainComponentRounded.displayName = "MainComponentRounded";
export const MainComponentRoundedMetadata = { 
  id: "main-component_rounded", 
  baseId: "main-component", 
  variant: "rounded", 
  name: "Main Component", 
  category: "design", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default MainComponentRounded;
