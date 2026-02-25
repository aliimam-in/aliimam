/**
 * Auto-generated logo component: Home Star Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HomeStarOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HomeStarOutlineLogo = React.forwardRef<SVGSVGElement, HomeStarOutlineLogoProps>(
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
      <path d="M19.258 10.258l-7.258 -7.258l-9 9h2v7a2 2 0 0 0 2 2h4" />
  <path d="M9 21v-6a2 2 0 0 1 2 -2h1.5" />
  <path d="M17.8 20.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138" />
    </svg>
  )
);

HomeStarOutlineLogo.displayName = "HomeStarOutlineLogo";

export const HomeStarOutlineLogoMetadata = {
  id: "home-star-outline",
  baseId: "home-star-outline",
  variant: "default",
  name: "Home Star Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HomeStarOutlineLogo;
