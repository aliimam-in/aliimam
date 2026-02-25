/**
 * Auto-generated logo component: Trending Down 3 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TrendingDown3OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TrendingDown3OutlineLogo = React.forwardRef<SVGSVGElement, TrendingDown3OutlineLogoProps>(
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
      <path d="M3 6h2.397a5 5 0 0 1 4.096 2.133l4.014 5.734a5 5 0 0 0 4.096 2.133h3.397" />
  <path d="M18 19l3 -3l-3 -3" />
    </svg>
  )
);

TrendingDown3OutlineLogo.displayName = "TrendingDown3OutlineLogo";

export const TrendingDown3OutlineLogoMetadata = {
  id: "trending-down-3-outline",
  baseId: "trending-down-3-outline",
  variant: "default",
  name: "Trending Down 3 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TrendingDown3OutlineLogo;
