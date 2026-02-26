/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Dice5FilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Dice5Filled = React.forwardRef<SVGSVGElement, Dice5FilledProps>(
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
      <path d="M18.333 2c1.96 0 3.56 1.537 3.662 3.472l.005 .195v12.666c0 1.96 -1.537 3.56 -3.472 3.662l-.195 .005h-12.666a3.667 3.667 0 0 1 -3.662 -3.472l-.005 -.195v-12.666c0 -1.96 1.537 -3.56 3.472 -3.662l.195 -.005h12.666zm-2.833 12a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0 -3m-7 0a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0 -3m3.5 -3.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0 -3m-3.5 -3.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0 -3m7 0a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0 -3" />
    </svg>
  )
);
Dice5Filled.displayName = "Dice5Filled";
export const Dice5FilledMetadata = { 
  id: "dice-5_filled", 
  baseId: "dice-5", 
  variant: "filled", 
  name: "Dice 5", 
  category: "filled", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Dice5Filled;
