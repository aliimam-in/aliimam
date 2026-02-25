/**
 * Auto-generated logo component: Building Castle Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BuildingCastleOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BuildingCastleOutlineLogo = React.forwardRef<SVGSVGElement, BuildingCastleOutlineLogoProps>(
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
      <path d="M15 19v-2a3 3 0 0 0 -6 0v2a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-14h4v3h3v-3h4v3h3v-3h4v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1" />
  <path d="M3 11l18 0" />
    </svg>
  )
);

BuildingCastleOutlineLogo.displayName = "BuildingCastleOutlineLogo";

export const BuildingCastleOutlineLogoMetadata = {
  id: "building-castle-outline",
  baseId: "building-castle-outline",
  variant: "default",
  name: "Building Castle Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BuildingCastleOutlineLogo;
