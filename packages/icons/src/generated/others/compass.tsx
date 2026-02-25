/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CompassProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Compass = React.forwardRef<SVGSVGElement, CompassProps>(
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
      <circle cx="12" cy="12" r="10" />
  <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" />
    </svg>
  )
);
Compass.displayName = "Compass";
export const CompassMetadata = { 
  id: "compass", 
  baseId: "compass", 
  variant: "default", 
  name: "Compass", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Compass;
