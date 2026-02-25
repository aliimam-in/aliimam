/**
 * Auto-generated logo component: Home Stats Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HomeStatsOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HomeStatsOutlineLogo = React.forwardRef<SVGSVGElement, HomeStatsOutlineLogoProps>(
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
      <path d="M19 13v-1h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h2.5" />
  <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2" />
  <path d="M13 22l3 -3l2 2l4 -4" />
  <path d="M19 17h3v3" />
    </svg>
  )
);

HomeStatsOutlineLogo.displayName = "HomeStatsOutlineLogo";

export const HomeStatsOutlineLogoMetadata = {
  id: "home-stats-outline",
  baseId: "home-stats-outline",
  variant: "default",
  name: "Home Stats Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HomeStatsOutlineLogo;
