/**
 * Auto-generated logo component: Trending Up Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TrendingUpOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TrendingUpOutlineLogo = React.forwardRef<SVGSVGElement, TrendingUpOutlineLogoProps>(
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
      <path d="M3 17l6 -6l4 4l8 -8" />
  <path d="M14 7l7 0l0 7" />
    </svg>
  )
);

TrendingUpOutlineLogo.displayName = "TrendingUpOutlineLogo";

export const TrendingUpOutlineLogoMetadata = {
  id: "trending-up-outline",
  baseId: "trending-up-outline",
  variant: "default",
  name: "Trending Up Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TrendingUpOutlineLogo;
