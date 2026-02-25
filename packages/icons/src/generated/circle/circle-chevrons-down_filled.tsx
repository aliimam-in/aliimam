/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CircleChevronsDownFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CircleChevronsDownFilled = React.forwardRef<SVGSVGElement, CircleChevronsDownFilledProps>(
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
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10 -10 10a10 10 0 1 1 0 -20m-2.293 10.293a1 1 0 1 0 -1.414 1.414l3 3a1 1 0 0 0 1.414 0l3 -3a1 1 0 0 0 0 -1.414l-.094 -.083a1 1 0 0 0 -1.32 .083l-2.294 2.292zm0 -4a1 1 0 0 0 -1.414 1.414l3 3a1 1 0 0 0 1.414 0l3 -3a1 1 0 0 0 0 -1.414l-.094 -.083a1 1 0 0 0 -1.32 .083l-2.294 2.292z" />
    </svg>
  )
);
CircleChevronsDownFilled.displayName = "CircleChevronsDownFilled";
export const CircleChevronsDownFilledMetadata = { 
  id: "circle-chevrons-down_filled", 
  baseId: "circle-chevrons-down", 
  variant: "filled", 
  name: "Circle Chevrons Down", 
  category: "circle", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CircleChevronsDownFilled;
