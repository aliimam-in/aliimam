/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CircleLetterUFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CircleLetterUFilled = React.forwardRef<SVGSVGElement, CircleLetterUFilledProps>(
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
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10 -10 10s-10 -4.477 -10 -10s4.477 -10 10 -10m2 5a1 1 0 0 0 -1 1v6a1 1 0 0 1 -2 0v-6a1 1 0 0 0 -2 0v6a3 3 0 0 0 6 0v-6a1 1 0 0 0 -1 -1" />
    </svg>
  )
);
CircleLetterUFilled.displayName = "CircleLetterUFilled";
export const CircleLetterUFilledMetadata = { 
  id: "circle-letter-u_filled", 
  baseId: "circle-letter-u", 
  variant: "filled", 
  name: "Circle Letter U", 
  category: "circle", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CircleLetterUFilled;
