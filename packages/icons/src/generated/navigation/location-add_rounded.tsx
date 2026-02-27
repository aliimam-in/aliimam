/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface LocationAddRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const LocationAddRounded = React.forwardRef<SVGSVGElement, LocationAddRoundedProps>(
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
      <path d="M9.25 11H14.75" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round"/>
<path d="M12 13.75V8.25" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round"/>
<path d="M3.61995 8.49C5.58995 -0.169998 18.42 -0.159997 20.38 8.5C21.53 13.58 18.37 17.88 15.6 20.54C13.59 22.48 10.41 22.48 8.38995 20.54C5.62995 17.88 2.46995 13.57 3.61995 8.49Z" stroke="#292D32" strokeWidth="1.5"/>
    </svg>
  )
);
LocationAddRounded.displayName = "LocationAddRounded";
export const LocationAddRoundedMetadata = { 
  id: "location-add_rounded", 
  baseId: "location-add", 
  variant: "rounded", 
  name: "Location Add", 
  category: "navigation", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default LocationAddRounded;
