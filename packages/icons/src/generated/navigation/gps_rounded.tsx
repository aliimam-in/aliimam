/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface GpsRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const GpsRounded = React.forwardRef<SVGSVGElement, GpsRoundedProps>(
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
      <path d="M12 19.5C16.1421 19.5 19.5 16.1421 19.5 12C19.5 7.85786 16.1421 4.5 12 4.5C7.85786 4.5 4.5 7.85786 4.5 12C4.5 16.1421 7.85786 19.5 12 19.5Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 4V2"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 12H2"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 20V22"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 12H22"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
GpsRounded.displayName = "GpsRounded";
export const GpsRoundedMetadata = { 
  id: "gps_rounded", 
  baseId: "gps", 
  variant: "rounded", 
  name: "Gps", 
  category: "navigation", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default GpsRounded;
