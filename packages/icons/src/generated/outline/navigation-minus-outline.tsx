/**
 * Auto-generated logo component: Navigation Minus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface NavigationMinusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const NavigationMinusOutlineLogo = React.forwardRef<SVGSVGElement, NavigationMinusOutlineLogoProps>(
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
      <path d="M17.5 15c-1.232 -2.67 -3.065 -6.67 -5.5 -12l-7.97 17.275c-.07 .2 -.017 .424 .135 .572c.15 .148 .374 .193 .57 .116l7.265 -2.463" />
  <path d="M16 19h6" />
    </svg>
  )
);

NavigationMinusOutlineLogo.displayName = "NavigationMinusOutlineLogo";

export const NavigationMinusOutlineLogoMetadata = {
  id: "navigation-minus-outline",
  baseId: "navigation-minus-outline",
  variant: "default",
  name: "Navigation Minus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default NavigationMinusOutlineLogo;
