/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface GpsFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const GpsFilled = React.forwardRef<SVGSVGElement, GpsFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m-.086 5.066c.372 -.837 -.483 -1.692 -1.32 -1.32l-9 4l-.108 .055c-.75 .44 -.611 1.609 .271 1.83l3.418 .853l.855 3.419c.23 .922 1.498 1.032 1.884 .163z" />
    </svg>
  )
);
GpsFilled.displayName = "GpsFilled";
export const GpsFilledMetadata = { 
  id: "gps_filled", 
  baseId: "gps", 
  variant: "filled", 
  name: "Gps", 
  category: "filled", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default GpsFilled;
