/**
 * Auto-generated logo component: Route Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RouteOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RouteOffOutlineLogo = React.forwardRef<SVGSVGElement, RouteOffOutlineLogoProps>(
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
      <path d="M4 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M16 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M12 19h4.5c.71 0 1.372 -.212 1.924 -.576m1.545 -2.459a3.5 3.5 0 0 0 -3.469 -3.965h-.499m-4 0h-3.501a3.5 3.5 0 0 1 -2.477 -5.972m2.477 -1.028h3.5" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

RouteOffOutlineLogo.displayName = "RouteOffOutlineLogo";

export const RouteOffOutlineLogoMetadata = {
  id: "route-off-outline",
  baseId: "route-off-outline",
  variant: "default",
  name: "Route Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RouteOffOutlineLogo;
