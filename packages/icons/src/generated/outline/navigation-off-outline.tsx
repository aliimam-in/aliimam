/**
 * Auto-generated logo component: Navigation Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface NavigationOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const NavigationOffOutlineLogo = React.forwardRef<SVGSVGElement, NavigationOffOutlineLogoProps>(
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
      <path d="M16.28 12.28c-.95 -2.064 -2.377 -5.157 -4.28 -9.28c-.7 1.515 -1.223 2.652 -1.573 3.41m-1.27 2.75c-.882 1.913 -2.59 5.618 -5.127 11.115c-.07 .2 -.017 .424 .135 .572c.15 .148 .374 .193 .57 .116l7.265 -2.463l7.265 2.463c.196 .077 .42 .032 .57 -.116a.548 .548 0 0 0 .134 -.572l-.26 -.563" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

NavigationOffOutlineLogo.displayName = "NavigationOffOutlineLogo";

export const NavigationOffOutlineLogoMetadata = {
  id: "navigation-off-outline",
  baseId: "navigation-off-outline",
  variant: "default",
  name: "Navigation Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default NavigationOffOutlineLogo;
