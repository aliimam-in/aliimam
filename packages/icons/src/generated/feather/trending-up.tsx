/**
 * Auto-generated logo component: Trending Up (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TrendingUpLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TrendingUpLogo = React.forwardRef<SVGSVGElement, TrendingUpLogoProps>(
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
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
    </svg>
  )
);

TrendingUpLogo.displayName = "TrendingUpLogo";

export const TrendingUpLogoMetadata = {
  id: "trending-up",
  baseId: "trending-up",
  variant: "default",
  name: "Trending Up",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TrendingUpLogo;
