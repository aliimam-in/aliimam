/**
 * Auto-generated logo component: Trending Down Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TrendingDownOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TrendingDownOutlineLogo = React.forwardRef<SVGSVGElement, TrendingDownOutlineLogoProps>(
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
      <path d="M3 7l6 6l4 -4l8 8" />
  <path d="M21 10l0 7l-7 0" />
    </svg>
  )
);

TrendingDownOutlineLogo.displayName = "TrendingDownOutlineLogo";

export const TrendingDownOutlineLogoMetadata = {
  id: "trending-down-outline",
  baseId: "trending-down-outline",
  variant: "default",
  name: "Trending Down Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TrendingDownOutlineLogo;
