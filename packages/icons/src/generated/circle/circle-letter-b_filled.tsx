/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CircleLetterBFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CircleLetterBFilled = React.forwardRef<SVGSVGElement, CircleLetterBFilledProps>(
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
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10 -10 10s-10 -4.477 -10 -10s4.477 -10 10 -10m0 5h-2a1 1 0 0 0 -1 1v8a1 1 0 0 0 1 1h2a3 3 0 0 0 3 -3l-.005 -.176a3 3 0 0 0 -.654 -1.7l-.106 -.124l.106 -.124a3 3 0 0 0 -2.341 -4.876m0 6a1 1 0 0 1 0 2h-1v-2zm0 -4a1 1 0 0 1 0 2h-1v-2z" />
    </svg>
  )
);
CircleLetterBFilled.displayName = "CircleLetterBFilled";
export const CircleLetterBFilledMetadata = { 
  id: "circle-letter-b_filled", 
  baseId: "circle-letter-b", 
  variant: "filled", 
  name: "Circle Letter B", 
  category: "circle", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CircleLetterBFilled;
