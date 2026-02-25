/**
 * Auto-generated logo component: Trending Down (default)
 * Category: others
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
      <path d="M16 17h6v-6" />
  <path d="m22 17-8.5-8.5-5 5L2 7" />
    </svg>
  )
);

TrendingDownLogo.displayName = "TrendingDownLogo";

export const TrendingDownLogoMetadata = {
  id: "trending-down",
  baseId: "trending-down",
  variant: "default",
  name: "Trending Down",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TrendingDownLogo;
