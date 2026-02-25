/**
 * Auto-generated logo component: Shopping Cart Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ShoppingCartFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ShoppingCartFilledLogo = React.forwardRef<SVGSVGElement, ShoppingCartFilledLogoProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M6 2a1 1 0 0 1 .993 .883l.007 .117v1.068l13.071 .935a1 1 0 0 1 .929 1.024l-.01 .114l-1 7a1 1 0 0 1 -.877 .853l-.113 .006h-12v2h10a3 3 0 1 1 -2.995 3.176l-.005 -.176l.005 -.176c.017 -.288 .074 -.564 .166 -.824h-5.342a3 3 0 1 1 -5.824 1.176l-.005 -.176l.005 -.176a3.002 3.002 0 0 1 1.995 -2.654v-12.17h-1a1 1 0 0 1 -.993 -.883l-.007 -.117a1 1 0 0 1 .883 -.993l.117 -.007h2zm0 16a1 1 0 1 0 0 2a1 1 0 0 0 0 -2m11 0a1 1 0 1 0 0 2a1 1 0 0 0 0 -2" />
    </svg>
  )
);

ShoppingCartFilledLogo.displayName = "ShoppingCartFilledLogo";

export const ShoppingCartFilledLogoMetadata = {
  id: "shopping-cart-filled",
  baseId: "shopping-cart-filled",
  variant: "default",
  name: "Shopping Cart Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ShoppingCartFilledLogo;
