/**
 * Auto-generated logo component: Home Search Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HomeSearchOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HomeSearchOutlineLogo = React.forwardRef<SVGSVGElement, HomeSearchOutlineLogoProps>(
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
      <path d="M21 12l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h4.7" />
  <path d="M9 21v-6a2 2 0 0 1 2 -2h2" />
  <path d="M15 18a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M20.2 20.2l1.8 1.8" />
    </svg>
  )
);

HomeSearchOutlineLogo.displayName = "HomeSearchOutlineLogo";

export const HomeSearchOutlineLogoMetadata = {
  id: "home-search-outline",
  baseId: "home-search-outline",
  variant: "default",
  name: "Home Search Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HomeSearchOutlineLogo;
