/**
 * Auto-generated logo component: Navigation Search Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface NavigationSearchOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const NavigationSearchOutlineLogo = React.forwardRef<SVGSVGElement, NavigationSearchOutlineLogoProps>(
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
      <path d="M15.876 11.403l-3.876 -8.403l-7.97 17.275c-.07 .2 -.017 .424 .135 .572c.15 .148 .374 .193 .57 .116l6.29 -2.132" />
  <path d="M15 18a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M20.2 20.2l1.8 1.8" />
    </svg>
  )
);

NavigationSearchOutlineLogo.displayName = "NavigationSearchOutlineLogo";

export const NavigationSearchOutlineLogoMetadata = {
  id: "navigation-search-outline",
  baseId: "navigation-search-outline",
  variant: "default",
  name: "Navigation Search Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default NavigationSearchOutlineLogo;
