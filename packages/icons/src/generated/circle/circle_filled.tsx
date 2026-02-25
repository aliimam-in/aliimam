/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CircleFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CircleFilled = React.forwardRef<SVGSVGElement, CircleFilledProps>(
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
      <path d="M7 3.34a10 10 0 1 1 -4.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 4.995 -8.336z" />
    </svg>
  )
);
CircleFilled.displayName = "CircleFilled";
export const CircleFilledMetadata = { 
  id: "circle_filled", 
  baseId: "circle", 
  variant: "filled", 
  name: "Circle", 
  category: "circle", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CircleFilled;
