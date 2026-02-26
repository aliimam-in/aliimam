/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ShoppingBagProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ShoppingBag = React.forwardRef<SVGSVGElement, ShoppingBagProps>(
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
      <path d="M16 10a4 4 0 0 1-8 0" />
  <path d="M3.103 6.034h17.794" />
  <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z" />
    </svg>
  )
);
ShoppingBag.displayName = "ShoppingBag";
export const ShoppingBagMetadata = { 
  id: "shopping-bag", 
  baseId: "shopping-bag", 
  variant: "default", 
  name: "Shopping Bag", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ShoppingBag;
