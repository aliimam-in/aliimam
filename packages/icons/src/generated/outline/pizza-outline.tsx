/**
 * Auto-generated logo component: Pizza Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PizzaOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PizzaOutlineLogo = React.forwardRef<SVGSVGElement, PizzaOutlineLogoProps>(
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
      <path d="M12 21.5c-3.04 0 -5.952 -.714 -8.5 -1.983l8.5 -16.517l8.5 16.517a19.09 19.09 0 0 1 -8.5 1.983" />
  <path d="M5.38 15.866a14.94 14.94 0 0 0 6.815 1.634a14.944 14.944 0 0 0 6.502 -1.479" />
  <path d="M13 11.01v-.01" />
  <path d="M11 14v-.01" />
    </svg>
  )
);

PizzaOutlineLogo.displayName = "PizzaOutlineLogo";

export const PizzaOutlineLogoMetadata = {
  id: "pizza-outline",
  baseId: "pizza-outline",
  variant: "default",
  name: "Pizza Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PizzaOutlineLogo;
