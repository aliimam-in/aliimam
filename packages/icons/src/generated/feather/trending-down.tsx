/**
 * Auto-generated logo component: Trending Down (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TrendingDownLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TrendingDownLogo = React.forwardRef<SVGSVGElement, TrendingDownLogoProps>(
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
      <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/>
    </svg>
  )
);

TrendingDownLogo.displayName = "TrendingDownLogo";

export const TrendingDownLogoMetadata = {
  id: "trending-down",
  baseId: "trending-down",
  variant: "default",
  name: "Trending Down",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TrendingDownLogo;
