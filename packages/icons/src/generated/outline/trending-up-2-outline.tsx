/**
 * Auto-generated logo component: Trending Up 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TrendingUp2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TrendingUp2OutlineLogo = React.forwardRef<SVGSVGElement, TrendingUp2OutlineLogoProps>(
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
      <path d="M18 5l3 3l-3 3" />
  <path d="M3 18h5l7 -10h6" />
    </svg>
  )
);

TrendingUp2OutlineLogo.displayName = "TrendingUp2OutlineLogo";

export const TrendingUp2OutlineLogoMetadata = {
  id: "trending-up-2-outline",
  baseId: "trending-up-2-outline",
  variant: "default",
  name: "Trending Up 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TrendingUp2OutlineLogo;
