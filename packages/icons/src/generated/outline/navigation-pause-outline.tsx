/**
 * Auto-generated logo component: Navigation Pause Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface NavigationPauseOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const NavigationPauseOutlineLogo = React.forwardRef<SVGSVGElement, NavigationPauseOutlineLogoProps>(
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
      <path d="M16.666 13.114l-4.666 -10.114l-7.97 17.275c-.07 .2 -.017 .424 .135 .572c.15 .148 .374 .193 .57 .116l7.265 -2.463l1.056 .358" />
  <path d="M17 17v5" />
  <path d="M21 17v5" />
    </svg>
  )
);

NavigationPauseOutlineLogo.displayName = "NavigationPauseOutlineLogo";

export const NavigationPauseOutlineLogoMetadata = {
  id: "navigation-pause-outline",
  baseId: "navigation-pause-outline",
  variant: "default",
  name: "Navigation Pause Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default NavigationPauseOutlineLogo;
