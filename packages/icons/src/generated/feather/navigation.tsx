/**
 * Auto-generated logo component: Navigation (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface NavigationLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const NavigationLogo = React.forwardRef<SVGSVGElement, NavigationLogoProps>(
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
      <polygon points="3 11 22 2 13 21 11 13 3 11"/>
    </svg>
  )
);

NavigationLogo.displayName = "NavigationLogo";

export const NavigationLogoMetadata = {
  id: "navigation",
  baseId: "navigation",
  variant: "default",
  name: "Navigation",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default NavigationLogo;
