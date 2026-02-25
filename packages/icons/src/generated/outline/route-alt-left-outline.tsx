/**
 * Auto-generated logo component: Route Alt Left Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RouteAltLeftOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RouteAltLeftOutlineLogo = React.forwardRef<SVGSVGElement, RouteAltLeftOutlineLogoProps>(
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
      <path d="M8 3h-5v5" />
  <path d="M16 3h5v5" />
  <path d="M3 3l7.536 7.536a5 5 0 0 1 1.464 3.534v6.93" />
  <path d="M18 6.01v-.01" />
  <path d="M16 8.02v-.01" />
  <path d="M14 10v.01" />
    </svg>
  )
);

RouteAltLeftOutlineLogo.displayName = "RouteAltLeftOutlineLogo";

export const RouteAltLeftOutlineLogoMetadata = {
  id: "route-alt-left-outline",
  baseId: "route-alt-left-outline",
  variant: "default",
  name: "Route Alt Left Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RouteAltLeftOutlineLogo;
