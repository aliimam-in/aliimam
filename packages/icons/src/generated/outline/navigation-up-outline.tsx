/**
 * Auto-generated logo component: Navigation Up Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface NavigationUpOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const NavigationUpOutlineLogo = React.forwardRef<SVGSVGElement, NavigationUpOutlineLogoProps>(
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
      <path d="M16.54 12.843l-4.54 -9.843l-7.97 17.275c-.07 .2 -.017 .424 .135 .572c.15 .148 .374 .193 .57 .116l7.265 -2.463" />
  <path d="M19 22v-6" />
  <path d="M22 19l-3 -3l-3 3" />
    </svg>
  )
);

NavigationUpOutlineLogo.displayName = "NavigationUpOutlineLogo";

export const NavigationUpOutlineLogoMetadata = {
  id: "navigation-up-outline",
  baseId: "navigation-up-outline",
  variant: "default",
  name: "Navigation Up Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default NavigationUpOutlineLogo;
