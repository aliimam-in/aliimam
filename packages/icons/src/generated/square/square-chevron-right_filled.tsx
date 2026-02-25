/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SquareChevronRightFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SquareChevronRightFilled = React.forwardRef<SVGSVGElement, SquareChevronRightFilledProps>(
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
      <path d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm-7.387 6.21a1 1 0 0 0 -1.32 .083l-.083 .094a1 1 0 0 0 .083 1.32l2.292 2.293l-2.292 2.293l-.083 .094a1 1 0 0 0 1.497 1.32l3 -3l.083 -.094a1 1 0 0 0 -.083 -1.32l-3 -3z" />
    </svg>
  )
);
SquareChevronRightFilled.displayName = "SquareChevronRightFilled";
export const SquareChevronRightFilledMetadata = { 
  id: "square-chevron-right_filled", 
  baseId: "square-chevron-right", 
  variant: "filled", 
  name: "Square Chevron Right", 
  category: "square", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SquareChevronRightFilled;
