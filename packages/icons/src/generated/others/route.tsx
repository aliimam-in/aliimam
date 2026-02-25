/**
 * Auto-generated logo component: Route (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RouteLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RouteLogo = React.forwardRef<SVGSVGElement, RouteLogoProps>(
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
  <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" />
  <circle cx="18" cy="5" r="3" />
    </svg>
  )
);

RouteLogo.displayName = "RouteLogo";

export const RouteLogoMetadata = {
  id: "route",
  baseId: "route",
  variant: "default",
  name: "Route",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RouteLogo;
