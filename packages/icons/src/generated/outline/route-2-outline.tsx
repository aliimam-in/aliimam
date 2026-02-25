/**
 * Auto-generated logo component: Route 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Route2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Route2OutlineLogo = React.forwardRef<SVGSVGElement, Route2OutlineLogoProps>(
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
  <path d="M14 5a2 2 0 0 0 -2 2v10a2 2 0 0 1 -2 2" />
    </svg>
  )
);

Route2OutlineLogo.displayName = "Route2OutlineLogo";

export const Route2OutlineLogoMetadata = {
  id: "route-2-outline",
  baseId: "route-2-outline",
  variant: "default",
  name: "Route 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Route2OutlineLogo;
