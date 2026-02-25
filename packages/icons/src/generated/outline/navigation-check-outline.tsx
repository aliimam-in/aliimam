/**
 * Auto-generated logo component: Navigation Check Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface NavigationCheckOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const NavigationCheckOutlineLogo = React.forwardRef<SVGSVGElement, NavigationCheckOutlineLogoProps>(
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
      <path d="M17.487 14.894l-5.487 -11.894l-7.97 17.275c-.07 .2 -.017 .424 .135 .572c.15 .148 .374 .193 .57 .116l6.275 -2.127" />
  <path d="M15 19l2 2l4 -4" />
    </svg>
  )
);

NavigationCheckOutlineLogo.displayName = "NavigationCheckOutlineLogo";

export const NavigationCheckOutlineLogoMetadata = {
  id: "navigation-check-outline",
  baseId: "navigation-check-outline",
  variant: "default",
  name: "Navigation Check Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default NavigationCheckOutlineLogo;
