/**
 * Auto-generated logo component: Trending Up 3 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TrendingUp3OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TrendingUp3OutlineLogo = React.forwardRef<SVGSVGElement, TrendingUp3OutlineLogoProps>(
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
  <path d="M3 18h2.397a5 5 0 0 0 4.096 -2.133l4.014 -5.734a5 5 0 0 1 4.096 -2.133h3.397" />
    </svg>
  )
);

TrendingUp3OutlineLogo.displayName = "TrendingUp3OutlineLogo";

export const TrendingUp3OutlineLogoMetadata = {
  id: "trending-up-3-outline",
  baseId: "trending-up-3-outline",
  variant: "default",
  name: "Trending Up 3 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TrendingUp3OutlineLogo;
