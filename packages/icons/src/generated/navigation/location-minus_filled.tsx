/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface LocationMinusFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const LocationMinusFilled = React.forwardRef<SVGSVGElement, LocationMinusFilledProps>(
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
      <path d="M20.62 8.7C19.58 4.07 15.54 2 12 2C12 2 12 2 11.99 2C8.45999 2 4.42999 4.07 3.37999 8.69C2.19999 13.85 5.35999 18.22 8.21999 20.98C9.27999 22 10.64 22.51 12 22.51C13.36 22.51 14.72 22 15.77 20.98C18.63 18.22 21.79 13.86 20.62 8.7ZM14.75 11.75H9.24999C8.83999 11.75 8.49999 11.41 8.49999 11C8.49999 10.59 8.83999 10.25 9.24999 10.25H14.75C15.16 10.25 15.5 10.59 15.5 11C15.5 11.41 15.16 11.75 14.75 11.75Z" fill="currentColor"/>
    </svg>
  )
);
LocationMinusFilled.displayName = "LocationMinusFilled";
export const LocationMinusFilledMetadata = { 
  id: "location-minus_filled", 
  baseId: "location-minus", 
  variant: "filled", 
  name: "Location Minus", 
  category: "navigation", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default LocationMinusFilled;
