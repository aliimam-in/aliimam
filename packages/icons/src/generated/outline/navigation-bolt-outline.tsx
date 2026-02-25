/**
 * Auto-generated logo component: Navigation Bolt Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface NavigationBoltOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const NavigationBoltOutlineLogo = React.forwardRef<SVGSVGElement, NavigationBoltOutlineLogoProps>(
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
      <path d="M16.559 12.882l-4.559 -9.882l-7.97 17.275c-.07 .2 -.017 .424 .135 .572c.15 .148 .374 .193 .57 .116l7.265 -2.463l1.036 .351" />
  <path d="M19 16l-2 3h4l-2 3" />
    </svg>
  )
);

NavigationBoltOutlineLogo.displayName = "NavigationBoltOutlineLogo";

export const NavigationBoltOutlineLogoMetadata = {
  id: "navigation-bolt-outline",
  baseId: "navigation-bolt-outline",
  variant: "default",
  name: "Navigation Bolt Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default NavigationBoltOutlineLogo;
