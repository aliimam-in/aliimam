/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CarFrontProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CarFront = React.forwardRef<SVGSVGElement, CarFrontProps>(
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
      <path d="m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8" />
  <path d="M7 14h.01" />
  <path d="M17 14h.01" />
  <rect width="18" height="8" x="3" y="10" rx="2" />
  <path d="M5 18v2" />
  <path d="M19 18v2" />
    </svg>
  )
);
CarFront.displayName = "CarFront";
export const CarFrontMetadata = { 
  id: "car-front", 
  baseId: "car-front", 
  variant: "default", 
  name: "Car Front", 
  category: "transport", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CarFront;
