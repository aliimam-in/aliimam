/**
 * Auto-generated logo component: Navigation Top Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface NavigationTopOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const NavigationTopOutlineLogo = React.forwardRef<SVGSVGElement, NavigationTopOutlineLogoProps>(
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
      <path d="M16.54 19.977a.34 .34 0 0 0 .357 -.07a.33 .33 0 0 0 .084 -.35l-4.981 -10.557l-4.982 10.557a.33 .33 0 0 0 .084 .35a.34 .34 0 0 0 .357 .07l4.541 -1.477l4.54 1.477" />
  <path d="M12 3v2" />
    </svg>
  )
);

NavigationTopOutlineLogo.displayName = "NavigationTopOutlineLogo";

export const NavigationTopOutlineLogoMetadata = {
  id: "navigation-top-outline",
  baseId: "navigation-top-outline",
  variant: "default",
  name: "Navigation Top Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default NavigationTopOutlineLogo;
