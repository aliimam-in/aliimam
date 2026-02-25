/**
 * Auto-generated logo component: Burger Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BurgerOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BurgerOutlineLogo = React.forwardRef<SVGSVGElement, BurgerOutlineLogoProps>(
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
      <path d="M4 15h16a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4" />
  <path d="M12 4c3.783 0 6.953 2.133 7.786 5h-15.572c.833 -2.867 4.003 -5 7.786 -5" />
  <path d="M5 12h14" />
    </svg>
  )
);

BurgerOutlineLogo.displayName = "BurgerOutlineLogo";

export const BurgerOutlineLogoMetadata = {
  id: "burger-outline",
  baseId: "burger-outline",
  variant: "default",
  name: "Burger Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BurgerOutlineLogo;
