/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ShoppingBasketProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ShoppingBasket = React.forwardRef<SVGSVGElement, ShoppingBasketProps>(
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
      <path d="m15 11-1 9" />
  <path d="m19 11-4-7" />
  <path d="M2 11h20" />
  <path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4" />
  <path d="M4.5 15.5h15" />
  <path d="m5 11 4-7" />
  <path d="m9 11 1 9" />
    </svg>
  )
);
ShoppingBasket.displayName = "ShoppingBasket";
export const ShoppingBasketMetadata = { 
  id: "shopping-basket", 
  baseId: "shopping-basket", 
  variant: "default", 
  name: "Shopping Basket", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ShoppingBasket;
