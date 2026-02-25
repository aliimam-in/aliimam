/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Car4wdFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Car4wdFilled = React.forwardRef<SVGSVGElement, Car4wdFilledProps>(
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
      <path d="M17 2a3 3 0 0 1 3 3v2a3 3 0 0 1 -6 0h-1v10h1a3 3 0 0 1 6 0v2a3 3 0 0 1 -6 0h-4a3 3 0 0 1 -6 0v-2a3 3 0 0 1 6 0h1v-10h-1a3 3 0 1 1 -6 0v-2a3 3 0 1 1 6 0h4a3 3 0 0 1 3 -3" />
    </svg>
  )
);
Car4wdFilled.displayName = "Car4wdFilled";
export const Car4wdFilledMetadata = { 
  id: "car-4wd_filled", 
  baseId: "car-4wd", 
  variant: "filled", 
  name: "Car 4wd", 
  category: "filled", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Car4wdFilled;
