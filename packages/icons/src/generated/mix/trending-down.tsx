/**
 * Auto-generated logo component: Trending Down (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixTrendingDownLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixTrendingDownLogo = React.forwardRef<SVGSVGElement, MixTrendingDownLogoProps>(
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

MixTrendingDownLogo.displayName = "MixTrendingDownLogo";

export const MixTrendingDownLogoMetadata = {
  id: "trending-down",
  baseId: "trending-down",
  variant: "default",
  name: "Trending Down",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixTrendingDownLogo;
