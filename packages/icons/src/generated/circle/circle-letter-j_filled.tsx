/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CircleLetterJFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CircleLetterJFilled = React.forwardRef<SVGSVGElement, CircleLetterJFilledProps>(
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
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10 -10 10s-10 -4.477 -10 -10s4.477 -10 10 -10m2 5h-4a1 1 0 0 0 -1 1l.007 .117a1 1 0 0 0 .993 .883h3v5a1 1 0 0 1 -1.993 .117l-.007 -.117a1 1 0 0 0 -2 0a3 3 0 0 0 6 0v-6a1 1 0 0 0 -1 -1" />
    </svg>
  )
);
CircleLetterJFilled.displayName = "CircleLetterJFilled";
export const CircleLetterJFilledMetadata = { 
  id: "circle-letter-j_filled", 
  baseId: "circle-letter-j", 
  variant: "filled", 
  name: "Circle Letter J", 
  category: "circle", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CircleLetterJFilled;
