/**
 * Auto-generated logo component: Building Store Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BuildingStoreOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BuildingStoreOutlineLogo = React.forwardRef<SVGSVGElement, BuildingStoreOutlineLogoProps>(
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
      <path d="M3 21l18 0" />
  <path d="M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4" />
  <path d="M5 21l0 -10.15" />
  <path d="M19 21l0 -10.15" />
  <path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4" />
    </svg>
  )
);

BuildingStoreOutlineLogo.displayName = "BuildingStoreOutlineLogo";

export const BuildingStoreOutlineLogoMetadata = {
  id: "building-store-outline",
  baseId: "building-store-outline",
  variant: "default",
  name: "Building Store Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BuildingStoreOutlineLogo;
