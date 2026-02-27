/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ShoppingBagRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ShoppingBagRounded = React.forwardRef<SVGSVGElement, ShoppingBagRoundedProps>(
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
      <path d="M8.39999 6.5H15.6C19 6.5 19.34 8.09 19.57 10.03L20.47 17.53C20.76 19.99 20 22 16.5 22H7.50999C3.99999 22 3.23999 19.99 3.53999 17.53L4.44 10.03C4.66 8.09 4.99999 6.5 8.39999 6.5Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 8V4.5C8 3 9 2 10.5 2H13.5C15 2 16 3 16 4.5V8" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.41 17.03H8" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
ShoppingBagRounded.displayName = "ShoppingBagRounded";
export const ShoppingBagRoundedMetadata = { 
  id: "shopping-bag_rounded", 
  baseId: "shopping-bag", 
  variant: "rounded", 
  name: "Shopping Bag", 
  category: "commerce", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ShoppingBagRounded;
