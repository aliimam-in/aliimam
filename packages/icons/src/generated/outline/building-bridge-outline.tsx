/**
 * Auto-generated logo component: Building Bridge Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BuildingBridgeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BuildingBridgeOutlineLogo = React.forwardRef<SVGSVGElement, BuildingBridgeOutlineLogoProps>(
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
      <path d="M6 5l0 14" />
  <path d="M18 5l0 14" />
  <path d="M2 15l20 0" />
  <path d="M3 8a7.5 7.5 0 0 0 3 -2a6.5 6.5 0 0 0 12 0a7.5 7.5 0 0 0 3 2" />
  <path d="M12 10l0 5" />
    </svg>
  )
);

BuildingBridgeOutlineLogo.displayName = "BuildingBridgeOutlineLogo";

export const BuildingBridgeOutlineLogoMetadata = {
  id: "building-bridge-outline",
  baseId: "building-bridge-outline",
  variant: "default",
  name: "Building Bridge Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BuildingBridgeOutlineLogo;
