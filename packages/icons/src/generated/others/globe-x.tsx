/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface GlobeXProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const GlobeX = React.forwardRef<SVGSVGElement, GlobeXProps>(
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
      <path d="m16 3 5 5" />
  <path d="M2 12h20A10 10 0 1 1 12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 4-10" />
  <path d="m21 3-5 5" />
    </svg>
  )
);
GlobeX.displayName = "GlobeX";
export const GlobeXMetadata = { 
  id: "globe-x", 
  baseId: "globe-x", 
  variant: "default", 
  name: "Globe X", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default GlobeX;
