/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CircleLetterPFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CircleLetterPFilled = React.forwardRef<SVGSVGElement, CircleLetterPFilledProps>(
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
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10 -10 10s-10 -4.477 -10 -10s4.477 -10 10 -10m0 5h-2a1 1 0 0 0 -1 1v8a1 1 0 0 0 1 1l.117 -.007a1 1 0 0 0 .883 -.993v-3h1a3 3 0 0 0 0 -6m0 2a1 1 0 0 1 0 2h-1v-2z" />
    </svg>
  )
);
CircleLetterPFilled.displayName = "CircleLetterPFilled";
export const CircleLetterPFilledMetadata = { 
  id: "circle-letter-p_filled", 
  baseId: "circle-letter-p", 
  variant: "filled", 
  name: "Circle Letter P", 
  category: "circle", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CircleLetterPFilled;
