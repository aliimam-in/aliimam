/**
 * Auto-generated logo component: Navigation North Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface NavigationNorthOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const NavigationNorthOutlineLogo = React.forwardRef<SVGSVGElement, NavigationNorthOutlineLogoProps>(
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
      <path d="M16 21l-4 -8l-4 8l4 -2l4 2" />
  <path d="M10 9v-6l4 6v-6" />
    </svg>
  )
);

NavigationNorthOutlineLogo.displayName = "NavigationNorthOutlineLogo";

export const NavigationNorthOutlineLogoMetadata = {
  id: "navigation-north-outline",
  baseId: "navigation-north-outline",
  variant: "default",
  name: "Navigation North Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default NavigationNorthOutlineLogo;
