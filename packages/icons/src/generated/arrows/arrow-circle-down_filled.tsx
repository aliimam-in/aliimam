/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ArrowCircleDownFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ArrowCircleDownFilled = React.forwardRef<SVGSVGElement, ArrowCircleDownFilledProps>(
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
      <path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.06 11.27L12.53 14.8C12.38 14.95 12.19 15.02 12 15.02C11.81 15.02 11.62 14.95 11.47 14.8L7.94 11.27C7.65 10.98 7.65 10.5 7.94 10.21C8.23 9.92 8.71 9.92 9 10.21L12 13.21L15 10.21C15.29 9.92 15.77 9.92 16.06 10.21C16.35 10.5 16.35 10.97 16.06 11.27Z" fill="currentColor"/>
    </svg>
  )
);
ArrowCircleDownFilled.displayName = "ArrowCircleDownFilled";
export const ArrowCircleDownFilledMetadata = { 
  id: "arrow-circle-down_filled", 
  baseId: "arrow-circle-down", 
  variant: "filled", 
  name: "Arrow Circle Down", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ArrowCircleDownFilled;
