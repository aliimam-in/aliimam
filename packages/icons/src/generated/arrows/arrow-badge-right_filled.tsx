/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ArrowBadgeRightFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ArrowBadgeRightFilled = React.forwardRef<SVGSVGElement, ArrowBadgeRightFilledProps>(
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
      <path d="M7 6l-.112 .006a1 1 0 0 0 -.669 1.619l3.501 4.375l-3.5 4.375a1 1 0 0 0 .78 1.625h6a1 1 0 0 0 .78 -.375l4 -5a1 1 0 0 0 0 -1.25l-4 -5a1 1 0 0 0 -.78 -.375h-6z" />
    </svg>
  )
);
ArrowBadgeRightFilled.displayName = "ArrowBadgeRightFilled";
export const ArrowBadgeRightFilledMetadata = { 
  id: "arrow-badge-right_filled", 
  baseId: "arrow-badge-right", 
  variant: "filled", 
  name: "Arrow Badge Right", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ArrowBadgeRightFilled;
