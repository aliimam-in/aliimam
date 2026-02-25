/**
 * Auto-generated logo component: Navigation Exclamation Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface NavigationExclamationOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const NavigationExclamationOutlineLogo = React.forwardRef<SVGSVGElement, NavigationExclamationOutlineLogoProps>(
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
      <path d="M16.535 12.832l-4.535 -9.832l-7.97 17.275c-.07 .2 -.017 .424 .135 .572c.15 .148 .374 .193 .57 .116l7.265 -2.463c1.38 .468 2.416 .82 3.107 1.053" />
  <path d="M19 16v3" />
  <path d="M19 22v.01" />
    </svg>
  )
);

NavigationExclamationOutlineLogo.displayName = "NavigationExclamationOutlineLogo";

export const NavigationExclamationOutlineLogoMetadata = {
  id: "navigation-exclamation-outline",
  baseId: "navigation-exclamation-outline",
  variant: "default",
  name: "Navigation Exclamation Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default NavigationExclamationOutlineLogo;
