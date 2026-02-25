/**
 * Auto-generated logo component: Trending Down 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TrendingDown2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TrendingDown2OutlineLogo = React.forwardRef<SVGSVGElement, TrendingDown2OutlineLogoProps>(
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
      <path d="M3 6h5l7 10h6" />
  <path d="M18 19l3 -3l-3 -3" />
    </svg>
  )
);

TrendingDown2OutlineLogo.displayName = "TrendingDown2OutlineLogo";

export const TrendingDown2OutlineLogoMetadata = {
  id: "trending-down-2-outline",
  baseId: "trending-down-2-outline",
  variant: "default",
  name: "Trending Down 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TrendingDown2OutlineLogo;
