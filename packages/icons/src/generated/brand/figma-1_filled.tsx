/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Figma1FilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Figma1Filled = React.forwardRef<SVGSVGElement, Figma1FilledProps>(
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
      <path d="M12 12C12 10.9 12.9 10 14 10H12V12Z" fill="currentColor"/>
<path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16 12C16 13.1 15.1 14 14 14C12.9 14 12 13.1 12 12V14V16C12 17.1 11.1 18 10 18C8.9 18 8 17.1 8 16C8 14.9 8.9 14 10 14C8.9 14 8 13.1 8 12C8 10.9 8.9 10 10 10C8.9 10 8 9.1 8 8C8 6.9 8.9 6 10 6H12H14C15.1 6 16 6.9 16 8C16 9.1 15.1 10 14 10C15.1 10 16 10.9 16 12Z" fill="currentColor"/>
    </svg>
  )
);
Figma1Filled.displayName = "Figma1Filled";
export const Figma1FilledMetadata = { 
  id: "figma-1_filled", 
  baseId: "figma-1", 
  variant: "filled", 
  name: "Figma 1", 
  category: "brand", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Figma1Filled;
