/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface LocationSlashRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const LocationSlashRounded = React.forwardRef<SVGSVGElement, LocationSlashRoundedProps>(
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
      <path d="M10.42 13C9.5 12.46 8.88 11.46 8.88 10.31C8.88 8.59 10.27 7.19 12 7.19C13.15 7.19 14.15 7.81 14.69 8.74"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.98995 17.81C4.14995 15.3 2.80995 12.09 3.62995 8.48998C5.27995 1.22998 14.57 0.0599852 18.68 4.97999"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.38 8.5C21.53 13.58 18.37 17.88 15.6 20.54C13.59 22.48 10.41 22.48 8.39001 20.54"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 2L2 22"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
LocationSlashRounded.displayName = "LocationSlashRounded";
export const LocationSlashRoundedMetadata = { 
  id: "location-slash_rounded", 
  baseId: "location-slash", 
  variant: "rounded", 
  name: "Location Slash", 
  category: "navigation", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default LocationSlashRounded;
