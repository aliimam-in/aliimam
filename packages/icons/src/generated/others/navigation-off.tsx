/**
 * Auto-generated logo component: Navigation Off (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface NavigationOffLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const NavigationOffLogo = React.forwardRef<SVGSVGElement, NavigationOffLogoProps>(
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
      <path d="M8.43 8.43 3 11l8 2 2 8 2.57-5.43" />
  <path d="M17.39 11.73 22 2l-9.73 4.61" />
  <line x1="2" x2="22" y1="2" y2="22" />
    </svg>
  )
);

NavigationOffLogo.displayName = "NavigationOffLogo";

export const NavigationOffLogoMetadata = {
  id: "navigation-off",
  baseId: "navigation-off",
  variant: "default",
  name: "Navigation Off",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default NavigationOffLogo;
