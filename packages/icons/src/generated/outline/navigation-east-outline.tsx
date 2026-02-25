/**
 * Auto-generated logo component: Navigation East Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface NavigationEastOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const NavigationEastOutlineLogo = React.forwardRef<SVGSVGElement, NavigationEastOutlineLogoProps>(
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
      <path d="M14 3h-4v6h4" />
  <path d="M10 6h2.5" />
  <path d="M16 21l-4 -8l-4 8l4 -2l4 2" />
    </svg>
  )
);

NavigationEastOutlineLogo.displayName = "NavigationEastOutlineLogo";

export const NavigationEastOutlineLogoMetadata = {
  id: "navigation-east-outline",
  baseId: "navigation-east-outline",
  variant: "default",
  name: "Navigation East Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default NavigationEastOutlineLogo;
