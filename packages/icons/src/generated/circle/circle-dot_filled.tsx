/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CircleDotFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CircleDotFilled = React.forwardRef<SVGSVGElement, CircleDotFilledProps>(
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
      <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-5 6.66a2 2 0 0 0 -1.977 1.697l-.018 .154l-.005 .149l.005 .15a2 2 0 1 0 1.995 -2.15z" />
    </svg>
  )
);
CircleDotFilled.displayName = "CircleDotFilled";
export const CircleDotFilledMetadata = { 
  id: "circle-dot_filled", 
  baseId: "circle-dot", 
  variant: "filled", 
  name: "Circle Dot", 
  category: "circle", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CircleDotFilled;
