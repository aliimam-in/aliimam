/**
 * Auto-generated logo component: Trending Up (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixTrendingUpLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixTrendingUpLogo = React.forwardRef<SVGSVGElement, MixTrendingUpLogoProps>(
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
      <path d="M16 7h6v6" />
  <path d="m22 7-8.5 8.5-5-5L2 17" />
    </svg>
  )
);

MixTrendingUpLogo.displayName = "MixTrendingUpLogo";

export const MixTrendingUpLogoMetadata = {
  id: "trending-up",
  baseId: "trending-up",
  variant: "default",
  name: "Trending Up",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixTrendingUpLogo;
