/**
 * Auto-generated logo component: Route Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RouteOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RouteOutlineLogo = React.forwardRef<SVGSVGElement, RouteOutlineLogoProps>(
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
      <path d="M3 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
  <path d="M19 7a2 2 0 1 0 0 -4a2 2 0 0 0 0 4" />
  <path d="M11 19h5.5a3.5 3.5 0 0 0 0 -7h-8a3.5 3.5 0 0 1 0 -7h4.5" />
    </svg>
  )
);

RouteOutlineLogo.displayName = "RouteOutlineLogo";

export const RouteOutlineLogoMetadata = {
  id: "route-outline",
  baseId: "route-outline",
  variant: "default",
  name: "Route Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RouteOutlineLogo;
