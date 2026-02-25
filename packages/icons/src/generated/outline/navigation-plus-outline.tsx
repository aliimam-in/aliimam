/**
 * Auto-generated logo component: Navigation Plus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface NavigationPlusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const NavigationPlusOutlineLogo = React.forwardRef<SVGSVGElement, NavigationPlusOutlineLogoProps>(
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
      <path d="M16.573 12.914l-4.573 -9.914l-7.97 17.275c-.07 .2 -.017 .424 .135 .572c.15 .148 .374 .193 .57 .116l7.265 -2.463" />
  <path d="M16 19h6" />
  <path d="M19 16v6" />
    </svg>
  )
);

NavigationPlusOutlineLogo.displayName = "NavigationPlusOutlineLogo";

export const NavigationPlusOutlineLogoMetadata = {
  id: "navigation-plus-outline",
  baseId: "navigation-plus-outline",
  variant: "default",
  name: "Navigation Plus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default NavigationPlusOutlineLogo;
