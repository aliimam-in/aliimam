/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CaravanFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CaravanFilled = React.forwardRef<SVGSVGElement, CaravanFilledProps>(
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
      <path d="M15.949 3.684l.771 2.316h1.28a3 3 0 0 1 3 3v6h1a1 1 0 0 1 0 2h-1.17a3 3 0 0 1 -2.83 2h-6.17a3.001 3.001 0 0 1 -5.66 0h-1.17a3 3 0 0 1 -3 -3v-3.5a6.5 6.5 0 0 1 5.672 -6.448l6.934 -2.971a1 1 0 0 1 1.343 .603m-6.949 13.316a1 1 0 1 0 0 2a1 1 0 0 0 0 -2m5.5 -7h-1a1.5 1.5 0 0 0 -1.5 1.5v1a1.5 1.5 0 0 0 1.5 1.5h1a1.5 1.5 0 0 0 1.5 -1.5v-1a1.5 1.5 0 0 0 -1.5 -1.5m-.105 -4.653l-1.524 .653h1.742z" />
    </svg>
  )
);
CaravanFilled.displayName = "CaravanFilled";
export const CaravanFilledMetadata = { 
  id: "caravan_filled", 
  baseId: "caravan", 
  variant: "filled", 
  name: "Caravan", 
  category: "filled", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CaravanFilled;
