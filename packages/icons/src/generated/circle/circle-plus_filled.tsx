/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CirclePlusFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CirclePlusFilled = React.forwardRef<SVGSVGElement, CirclePlusFilledProps>(
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
      <path d="M4.929 4.929a10 10 0 1 1 14.141 14.141a10 10 0 0 1 -14.14 -14.14m8.071 4.071a1 1 0 1 0 -2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0 -2h-2v-2z" />
    </svg>
  )
);
CirclePlusFilled.displayName = "CirclePlusFilled";
export const CirclePlusFilledMetadata = { 
  id: "circle-plus_filled", 
  baseId: "circle-plus", 
  variant: "filled", 
  name: "Circle Plus", 
  category: "circle", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CirclePlusFilled;
