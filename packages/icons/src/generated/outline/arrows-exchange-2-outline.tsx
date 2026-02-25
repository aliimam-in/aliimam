/**
 * Auto-generated logo component: Arrows Exchange 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowsExchange2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowsExchange2OutlineLogo = React.forwardRef<SVGSVGElement, ArrowsExchange2OutlineLogoProps>(
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
      <path d="M17 10h-14l4 -4" />
  <path d="M7 14h14l-4 4" />
    </svg>
  )
);

ArrowsExchange2OutlineLogo.displayName = "ArrowsExchange2OutlineLogo";

export const ArrowsExchange2OutlineLogoMetadata = {
  id: "arrows-exchange-2-outline",
  baseId: "arrows-exchange-2-outline",
  variant: "default",
  name: "Arrows Exchange 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowsExchange2OutlineLogo;
