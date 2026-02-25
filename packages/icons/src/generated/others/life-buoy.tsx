/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface LifeBuoyProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const LifeBuoy = React.forwardRef<SVGSVGElement, LifeBuoyProps>(
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
  <path d="m4.93 4.93 4.24 4.24" />
  <path d="m14.83 9.17 4.24-4.24" />
  <path d="m14.83 14.83 4.24 4.24" />
  <path d="m9.17 14.83-4.24 4.24" />
  <circle cx="12" cy="12" r="4" />
    </svg>
  )
);
LifeBuoy.displayName = "LifeBuoy";
export const LifeBuoyMetadata = { 
  id: "life-buoy", 
  baseId: "life-buoy", 
  variant: "default", 
  name: "Life Buoy", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default LifeBuoy;
