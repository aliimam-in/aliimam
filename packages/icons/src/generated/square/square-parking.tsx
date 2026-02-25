/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SquareParkingProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SquareParking = React.forwardRef<SVGSVGElement, SquareParkingProps>(
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
      <rect width="18" height="18" x="3" y="3" rx="2" />
  <path d="M9 17V7h4a3 3 0 0 1 0 6H9" />
    </svg>
  )
);
SquareParking.displayName = "SquareParking";
export const SquareParkingMetadata = { 
  id: "square-parking", 
  baseId: "square-parking", 
  variant: "default", 
  name: "Square Parking", 
  category: "square", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SquareParking;
