/**
 * Auto-generated logo component: Building Broadcast Tower Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BuildingBroadcastTowerOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BuildingBroadcastTowerOutlineLogo = React.forwardRef<SVGSVGElement, BuildingBroadcastTowerOutlineLogoProps>(
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
      <path d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M16.616 13.924a5 5 0 1 0 -9.23 0" />
  <path d="M20.307 15.469a9 9 0 1 0 -16.615 0" />
  <path d="M9 21l3 -9l3 9" />
  <path d="M10 19h4" />
    </svg>
  )
);

BuildingBroadcastTowerOutlineLogo.displayName = "BuildingBroadcastTowerOutlineLogo";

export const BuildingBroadcastTowerOutlineLogoMetadata = {
  id: "building-broadcast-tower-outline",
  baseId: "building-broadcast-tower-outline",
  variant: "default",
  name: "Building Broadcast Tower Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BuildingBroadcastTowerOutlineLogo;
