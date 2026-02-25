/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CircleChevronRightFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CircleChevronRightFilled = React.forwardRef<SVGSVGElement, CircleChevronRightFilledProps>(
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
      <path d="M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -20 0c0 -5.523 4.477 -10 10 -10m-.293 6.293a1 1 0 0 0 -1.414 0l-.083 .094a1 1 0 0 0 .083 1.32l2.292 2.293l-2.292 2.293a1 1 0 0 0 1.414 1.414l3 -3a1 1 0 0 0 0 -1.414z" />
    </svg>
  )
);
CircleChevronRightFilled.displayName = "CircleChevronRightFilled";
export const CircleChevronRightFilledMetadata = { 
  id: "circle-chevron-right_filled", 
  baseId: "circle-chevron-right", 
  variant: "filled", 
  name: "Circle Chevron Right", 
  category: "circle", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CircleChevronRightFilled;
