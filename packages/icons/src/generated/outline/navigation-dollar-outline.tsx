/**
 * Auto-generated logo component: Navigation Dollar Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface NavigationDollarOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const NavigationDollarOutlineLogo = React.forwardRef<SVGSVGElement, NavigationDollarOutlineLogoProps>(
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
      <path d="M15.945 11.551l-3.945 -8.551l-7.97 17.275c-.07 .2 -.017 .424 .135 .572c.15 .148 .374 .193 .57 .116l7.265 -2.463l1.594 .54" />
  <path d="M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
  <path d="M19 21v1m0 -8v1" />
    </svg>
  )
);

NavigationDollarOutlineLogo.displayName = "NavigationDollarOutlineLogo";

export const NavigationDollarOutlineLogoMetadata = {
  id: "navigation-dollar-outline",
  baseId: "navigation-dollar-outline",
  variant: "default",
  name: "Navigation Dollar Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default NavigationDollarOutlineLogo;
