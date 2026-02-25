/**
 * Auto-generated logo component: Route Off (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RouteOffLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RouteOffLogo = React.forwardRef<SVGSVGElement, RouteOffLogoProps>(
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
      <circle cx="6" cy="19" r="3" />
  <path d="M9 19h8.5c.4 0 .9-.1 1.3-.2" />
  <path d="M5.2 5.2A3.5 3.53 0 0 0 6.5 12H12" />
  <path d="m2 2 20 20" />
  <path d="M21 15.3a3.5 3.5 0 0 0-3.3-3.3" />
  <path d="M15 5h-4.3" />
  <circle cx="18" cy="5" r="3" />
    </svg>
  )
);

RouteOffLogo.displayName = "RouteOffLogo";

export const RouteOffLogoMetadata = {
  id: "route-off",
  baseId: "route-off",
  variant: "default",
  name: "Route Off",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RouteOffLogo;
