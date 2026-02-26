/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CircleCaretRightFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CircleCaretRightFilled = React.forwardRef<SVGSVGElement, CircleCaretRightFilledProps>(
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
      <path d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m-5.293 4.953a1 1 0 0 0 -1.707 .707v6c0 .217 .07 .433 .21 .613l.083 .094a1 1 0 0 0 1.414 0l3 -3a1 1 0 0 0 0 -1.414z" />
    </svg>
  )
);
CircleCaretRightFilled.displayName = "CircleCaretRightFilled";
export const CircleCaretRightFilledMetadata = { 
  id: "circle-caret-right_filled", 
  baseId: "circle-caret-right", 
  variant: "filled", 
  name: "Circle Caret Right", 
  category: "circle", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CircleCaretRightFilled;
