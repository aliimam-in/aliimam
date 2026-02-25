/**
 * Auto-generated logo component: Navigation West Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface NavigationWestOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const NavigationWestOutlineLogo = React.forwardRef<SVGSVGElement, NavigationWestOutlineLogoProps>(
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
      <path d="M9 3l1 6l2 -3.75l2 3.75l1 -6" />
  <path d="M16 21l-4 -8l-4 8l4 -2l4 2" />
    </svg>
  )
);

NavigationWestOutlineLogo.displayName = "NavigationWestOutlineLogo";

export const NavigationWestOutlineLogoMetadata = {
  id: "navigation-west-outline",
  baseId: "navigation-west-outline",
  variant: "default",
  name: "Navigation West Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default NavigationWestOutlineLogo;
