/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CircleLetterOFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CircleLetterOFilled = React.forwardRef<SVGSVGElement, CircleLetterOFilledProps>(
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
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10 -10 10s-10 -4.477 -10 -10s4.477 -10 10 -10m0 5a3 3 0 0 0 -3 3v4a3 3 0 0 0 6 0v-4a3 3 0 0 0 -3 -3m0 2a1 1 0 0 1 1 1v4a1 1 0 0 1 -2 0v-4a1 1 0 0 1 1 -1" />
    </svg>
  )
);
CircleLetterOFilled.displayName = "CircleLetterOFilled";
export const CircleLetterOFilledMetadata = { 
  id: "circle-letter-o_filled", 
  baseId: "circle-letter-o", 
  variant: "filled", 
  name: "Circle Letter O", 
  category: "circle", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CircleLetterOFilled;
