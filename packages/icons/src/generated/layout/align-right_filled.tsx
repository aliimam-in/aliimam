/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface AlignRightFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const AlignRightFilled = React.forwardRef<SVGSVGElement, AlignRightFilledProps>(
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
      <path d="M4.62 15.98V17.02C4.62 18.61 5.22 19.25 6.74 19.25H18.62V13.75H6.74C5.22 13.75 4.62 14.39 4.62 15.98Z" fill="currentColor"/>
<path d="M9.62 7.48V8.52C9.62 10.11 10.23 10.75 11.74 10.75H18.62V5.25H11.74C10.23 5.25 9.62 5.89 9.62 7.48Z" fill="currentColor"/>
<path d="M18.62 22C18.21 22 17.87 21.66 17.87 21.25V2.75C17.87 2.34 18.21 2 18.62 2C19.03 2 19.37 2.34 19.37 2.75V21.25C19.38 21.66 19.04 22 18.62 22Z" fill="currentColor"/>
    </svg>
  )
);
AlignRightFilled.displayName = "AlignRightFilled";
export const AlignRightFilledMetadata = { 
  id: "align-right_filled", 
  baseId: "align-right", 
  variant: "filled", 
  name: "Align Right", 
  category: "layout", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default AlignRightFilled;
