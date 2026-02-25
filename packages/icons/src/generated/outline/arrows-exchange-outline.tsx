/**
 * Auto-generated logo component: Arrows Exchange Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowsExchangeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowsExchangeOutlineLogo = React.forwardRef<SVGSVGElement, ArrowsExchangeOutlineLogoProps>(
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
      <path d="M7 10h14l-4 -4" />
  <path d="M17 14h-14l4 4" />
    </svg>
  )
);

ArrowsExchangeOutlineLogo.displayName = "ArrowsExchangeOutlineLogo";

export const ArrowsExchangeOutlineLogoMetadata = {
  id: "arrows-exchange-outline",
  baseId: "arrows-exchange-outline",
  variant: "default",
  name: "Arrows Exchange Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowsExchangeOutlineLogo;
