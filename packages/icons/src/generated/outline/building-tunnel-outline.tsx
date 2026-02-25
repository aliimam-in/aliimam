/**
 * Auto-generated logo component: Building Tunnel Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BuildingTunnelOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BuildingTunnelOutlineLogo = React.forwardRef<SVGSVGElement, BuildingTunnelOutlineLogoProps>(
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
      <path d="M5 21h14a2 2 0 0 0 2 -2v-7a9 9 0 0 0 -18 0v7a2 2 0 0 0 2 2" />
  <path d="M8 21v-9a4 4 0 1 1 8 0v9" />
  <path d="M3 17h4" />
  <path d="M17 17h4" />
  <path d="M21 12h-4" />
  <path d="M7 12h-4" />
  <path d="M12 3v5" />
  <path d="M6 6l3 3" />
  <path d="M15 9l3 -3l-3 3" />
    </svg>
  )
);

BuildingTunnelOutlineLogo.displayName = "BuildingTunnelOutlineLogo";

export const BuildingTunnelOutlineLogoMetadata = {
  id: "building-tunnel-outline",
  baseId: "building-tunnel-outline",
  variant: "default",
  name: "Building Tunnel Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BuildingTunnelOutlineLogo;
