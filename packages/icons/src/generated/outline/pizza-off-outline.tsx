/**
 * Auto-generated logo component: Pizza Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PizzaOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PizzaOffOutlineLogo = React.forwardRef<SVGSVGElement, PizzaOffOutlineLogoProps>(
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
      <path d="M10.313 6.277l1.687 -3.277l5.34 10.376m2.477 6.463a19.093 19.093 0 0 1 -7.817 1.661c-3.04 0 -5.952 -.714 -8.5 -1.983l5.434 -10.559" />
  <path d="M5.38 15.866a14.94 14.94 0 0 0 6.815 1.634c1.56 0 3.105 -.24 4.582 -.713" />
  <path d="M11 14v-.01" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

PizzaOffOutlineLogo.displayName = "PizzaOffOutlineLogo";

export const PizzaOffOutlineLogoMetadata = {
  id: "pizza-off-outline",
  baseId: "pizza-off-outline",
  variant: "default",
  name: "Pizza Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PizzaOffOutlineLogo;
