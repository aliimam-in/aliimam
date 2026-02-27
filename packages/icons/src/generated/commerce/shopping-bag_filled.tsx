/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ShoppingBagFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ShoppingBagFilled = React.forwardRef<SVGSVGElement, ShoppingBagFilledProps>(
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
      <path d="M16 8.75C15.59 8.75 15.25 8.41 15.25 8V4.5C15.25 3.42 14.58 2.75 13.5 2.75H10.5C9.42 2.75 8.75 3.42 8.75 4.5V8C8.75 8.41 8.41 8.75 8 8.75C7.59 8.75 7.25 8.41 7.25 8V4.5C7.25 2.59 8.59 1.25 10.5 1.25H13.5C15.41 1.25 16.75 2.59 16.75 4.5V8C16.75 8.41 16.41 8.75 16 8.75Z" fill="currentColor"/>
<path d="M8 17.78C7.59 17.78 7.25 17.44 7.25 17.03C7.25 16.61 7.59 16.28 8 16.28H19.76C20.06 16.28 20.29 16.02 20.26 15.72L19.58 10.03C19.34 8.09 19 6.5 15.6 6.5H8.4C5 6.5 4.66 8.09 4.43 10.03L3.53 17.53C3.24 19.99 4 22 7.51 22H16.49C19.65 22 20.58 20.37 20.53 18.25C20.52 17.98 20.3 17.78 20.03 17.78H8Z" fill="currentColor"/>
    </svg>
  )
);
ShoppingBagFilled.displayName = "ShoppingBagFilled";
export const ShoppingBagFilledMetadata = { 
  id: "shopping-bag_filled", 
  baseId: "shopping-bag", 
  variant: "filled", 
  name: "Shopping Bag", 
  category: "commerce", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ShoppingBagFilled;
