/**
 * Auto-generated logo component: Route X 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RouteX2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RouteX2OutlineLogo = React.forwardRef<SVGSVGElement, RouteX2OutlineLogoProps>(
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
      <path d="M3 17l4 4" />
  <path d="M7 17l-4 4" />
  <path d="M17 3l4 4" />
  <path d="M21 3l-4 4" />
  <path d="M14 5a2 2 0 0 0 -2 2v10a2 2 0 0 1 -2 2" />
    </svg>
  )
);

RouteX2OutlineLogo.displayName = "RouteX2OutlineLogo";

export const RouteX2OutlineLogoMetadata = {
  id: "route-x-2-outline",
  baseId: "route-x-2-outline",
  variant: "default",
  name: "Route X 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RouteX2OutlineLogo;
