/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CircleParkingOffProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CircleParkingOff = React.forwardRef<SVGSVGElement, CircleParkingOffProps>(
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
      <path d="M12.656 7H13a3 3 0 0 1 2.984 3.307" />
  <path d="M13 13H9" />
  <path d="M19.071 19.071A1 1 0 0 1 4.93 4.93" />
  <path d="m2 2 20 20" />
  <path d="M8.357 2.687a10 10 0 0 1 12.956 12.956" />
  <path d="M9 17V9" />
    </svg>
  )
);
CircleParkingOff.displayName = "CircleParkingOff";
export const CircleParkingOffMetadata = { 
  id: "circle-parking-off", 
  baseId: "circle-parking-off", 
  variant: "default", 
  name: "Circle Parking Off", 
  category: "circle", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CircleParkingOff;
