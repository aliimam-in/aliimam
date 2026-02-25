/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CircleChevronLeftFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CircleChevronLeftFilled = React.forwardRef<SVGSVGElement, CircleChevronLeftFilledProps>(
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
      <path d="M17 3.34a10 10 0 0 1 5 8.66c0 5.523 -4.477 10 -10 10s-10 -4.477 -10 -10a10 10 0 0 1 15 -8.66m-3.293 4.953a1 1 0 0 0 -1.414 0l-3 3a1 1 0 0 0 0 1.414l3 3a1 1 0 0 0 1.414 0l.083 -.094a1 1 0 0 0 -.083 -1.32l-2.292 -2.293l2.292 -2.293a1 1 0 0 0 0 -1.414" />
    </svg>
  )
);
CircleChevronLeftFilled.displayName = "CircleChevronLeftFilled";
export const CircleChevronLeftFilledMetadata = { 
  id: "circle-chevron-left_filled", 
  baseId: "circle-chevron-left", 
  variant: "filled", 
  name: "Circle Chevron Left", 
  category: "circle", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CircleChevronLeftFilled;
