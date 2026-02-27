/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ArrowDownFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ArrowDownFilled = React.forwardRef<SVGSVGElement, ArrowDownFilledProps>(
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
      <path d="M17.92 8.17993H11.69H6.07999C5.11999 8.17993 4.63999 9.33993 5.31999 10.0199L10.5 15.1999C11.33 16.0299 12.68 16.0299 13.51 15.1999L15.48 13.2299L18.69 10.0199C19.36 9.33993 18.88 8.17993 17.92 8.17993Z" fill="currentColor"/>
    </svg>
  )
);
ArrowDownFilled.displayName = "ArrowDownFilled";
export const ArrowDownFilledMetadata = { 
  id: "arrow-down_filled", 
  baseId: "arrow-down", 
  variant: "filled", 
  name: "Arrow Down", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ArrowDownFilled;
