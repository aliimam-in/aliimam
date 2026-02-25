/**
 * Auto-generated logo component: Navigation Star Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface NavigationStarOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const NavigationStarOutlineLogo = React.forwardRef<SVGSVGElement, NavigationStarOutlineLogoProps>(
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
      <path d="M15.574 10.747l-3.574 -7.747l-7.97 17.275c-.07 .2 -.017 .424 .135 .572c.15 .148 .374 .193 .57 .116l5.454 -1.85" />
  <path d="M17.8 20.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138" />
    </svg>
  )
);

NavigationStarOutlineLogo.displayName = "NavigationStarOutlineLogo";

export const NavigationStarOutlineLogoMetadata = {
  id: "navigation-star-outline",
  baseId: "navigation-star-outline",
  variant: "default",
  name: "Navigation Star Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default NavigationStarOutlineLogo;
