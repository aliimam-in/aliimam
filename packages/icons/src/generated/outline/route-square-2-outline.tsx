/**
 * Auto-generated logo component: Route Square 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RouteSquare2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RouteSquare2OutlineLogo = React.forwardRef<SVGSVGElement, RouteSquare2OutlineLogoProps>(
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
      <path d="M14 5a2 2 0 0 0 -2 2v10a2 2 0 0 1 -2 2" />
  <path d="M3 17h4v4h-4l0 -4" />
  <path d="M17 3h4v4h-4l0 -4" />
    </svg>
  )
);

RouteSquare2OutlineLogo.displayName = "RouteSquare2OutlineLogo";

export const RouteSquare2OutlineLogoMetadata = {
  id: "route-square-2-outline",
  baseId: "route-square-2-outline",
  variant: "default",
  name: "Route Square 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RouteSquare2OutlineLogo;
