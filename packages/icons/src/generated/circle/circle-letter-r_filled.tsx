/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CircleLetterRFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CircleLetterRFilled = React.forwardRef<SVGSVGElement, CircleLetterRFilledProps>(
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
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10 -10 10s-10 -4.477 -10 -10s4.477 -10 10 -10m0 5h-2a1 1 0 0 0 -1 1v8a1 1 0 0 0 1 1l.117 -.007a1 1 0 0 0 .883 -.993v-2.332l2.2 2.932a1 1 0 0 0 1.4 .2l.096 -.081a1 1 0 0 0 .104 -1.319l-1.903 -2.538l.115 -.037a3.001 3.001 0 0 0 -1.012 -5.825m0 2a1 1 0 0 1 0 2h-1v-2z" />
    </svg>
  )
);
CircleLetterRFilled.displayName = "CircleLetterRFilled";
export const CircleLetterRFilledMetadata = { 
  id: "circle-letter-r_filled", 
  baseId: "circle-letter-r", 
  variant: "filled", 
  name: "Circle Letter R", 
  category: "circle", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CircleLetterRFilled;
