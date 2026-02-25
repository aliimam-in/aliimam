/**
 * Auto-generated logo component: Route Scan Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RouteScanOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RouteScanOutlineLogo = React.forwardRef<SVGSVGElement, RouteScanOutlineLogoProps>(
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
      <path d="M4 8v-2a2 2 0 0 1 2 -2h2" />
  <path d="M4 16v2a2 2 0 0 0 2 2h2" />
  <path d="M16 4h2a2 2 0 0 1 2 2v2" />
  <path d="M16 20h2a2 2 0 0 0 2 -2v-2" />
  <path d="M7 12v-3h3" />
  <path d="M14 9h3v3" />
  <path d="M7 9l4.414 4.414a2 2 0 0 1 .586 1.414v2.172" />
  <path d="M17 9l-4.414 4.414a2 2 0 0 0 -.586 1.414v2.172" />
    </svg>
  )
);

RouteScanOutlineLogo.displayName = "RouteScanOutlineLogo";

export const RouteScanOutlineLogoMetadata = {
  id: "route-scan-outline",
  baseId: "route-scan-outline",
  variant: "default",
  name: "Route Scan Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RouteScanOutlineLogo;
