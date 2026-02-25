/**
 * Auto-generated logo component: Navigation South Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface NavigationSouthOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const NavigationSouthOutlineLogo = React.forwardRef<SVGSVGElement, NavigationSouthOutlineLogoProps>(
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
      <path d="M10 8.25c0 .414 .336 .75 .75 .75h2.25a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-2a1 1 0 0 1 -1 -1v-1a1 1 0 0 1 1 -1h2.25a.75 .75 0 0 1 .75 .75" />
  <path d="M16 21l-4 -8l-4 8l4 -2l4 2" />
    </svg>
  )
);

NavigationSouthOutlineLogo.displayName = "NavigationSouthOutlineLogo";

export const NavigationSouthOutlineLogoMetadata = {
  id: "navigation-south-outline",
  baseId: "navigation-south-outline",
  variant: "default",
  name: "Navigation South Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default NavigationSouthOutlineLogo;
