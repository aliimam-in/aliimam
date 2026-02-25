/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface DiscountFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const DiscountFilled = React.forwardRef<SVGSVGElement, DiscountFilledProps>(
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
      <path d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m-2.5 9.66a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0 -3m1.207 -4.707a1 1 0 0 0 -1.414 0l-6 6a1 1 0 0 0 1.414 1.414l6 -6a1 1 0 0 0 0 -1.414m-6.207 -.293a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0 -3" />
    </svg>
  )
);
DiscountFilled.displayName = "DiscountFilled";
export const DiscountFilledMetadata = { 
  id: "discount_filled", 
  baseId: "discount", 
  variant: "filled", 
  name: "Discount", 
  category: "filled", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default DiscountFilled;
