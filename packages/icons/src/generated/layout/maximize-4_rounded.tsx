/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Maximize4RoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Maximize4Rounded = React.forwardRef<SVGSVGElement, Maximize4RoundedProps>(
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
      <path d="M21 9V3H15"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 15V21H9"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 3L13.5 10.5"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.5 13.5L3 21"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
Maximize4Rounded.displayName = "Maximize4Rounded";
export const Maximize4RoundedMetadata = { 
  id: "maximize-4_rounded", 
  baseId: "maximize-4", 
  variant: "rounded", 
  name: "Maximize 4", 
  category: "layout", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Maximize4Rounded;
