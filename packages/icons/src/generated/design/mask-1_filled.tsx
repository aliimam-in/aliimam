/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Mask1FilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Mask1Filled = React.forwardRef<SVGSVGElement, Mask1FilledProps>(
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
      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17Z" fill="currentColor"/>
<path d="M12 7V17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7Z" fill="currentColor"/>
    </svg>
  )
);
Mask1Filled.displayName = "Mask1Filled";
export const Mask1FilledMetadata = { 
  id: "mask-1_filled", 
  baseId: "mask-1", 
  variant: "filled", 
  name: "Mask 1", 
  category: "design", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Mask1Filled;
