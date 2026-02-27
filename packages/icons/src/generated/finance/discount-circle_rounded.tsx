/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface DiscountCircleRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const DiscountCircleRounded = React.forwardRef<SVGSVGElement, DiscountCircleRoundedProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size} 
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 15L15 9"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.4945 14.5H14.5035"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.49451 9.5H9.50349"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
DiscountCircleRounded.displayName = "DiscountCircleRounded";
export const DiscountCircleRoundedMetadata = { 
  id: "discount-circle_rounded", 
  baseId: "discount-circle", 
  variant: "rounded", 
  name: "Discount Circle", 
  category: "finance", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default DiscountCircleRounded;
