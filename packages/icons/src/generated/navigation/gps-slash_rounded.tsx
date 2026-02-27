/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface GpsSlashRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const GpsSlashRounded = React.forwardRef<SVGSVGElement, GpsSlashRoundedProps>(
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
      <path d="M9 18.88C9.92 19.28 10.93 19.5 12 19.5C16.14 19.5 19.5 16.14 19.5 12C19.5 10.93 19.28 9.92 18.88 9"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.21 6.6C15.86 5.3 14.02 4.5 12 4.5C7.86 4.5 4.5 7.86 4.5 12C4.5 14.01 5.29 15.84 6.58 17.19"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 4V2"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 12H2"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 20V22"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 12H22"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.12 9.88L9.88 14.12C9.34 13.58 9 12.83 9 12C9 10.34 10.34 9 12 9C12.83 9 13.58 9.34 14.12 9.88Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 2L2 22"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
GpsSlashRounded.displayName = "GpsSlashRounded";
export const GpsSlashRoundedMetadata = { 
  id: "gps-slash_rounded", 
  baseId: "gps-slash", 
  variant: "rounded", 
  name: "Gps Slash", 
  category: "navigation", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default GpsSlashRounded;
