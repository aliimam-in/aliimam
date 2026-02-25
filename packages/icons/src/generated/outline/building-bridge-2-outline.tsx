/**
 * Auto-generated logo component: Building Bridge 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BuildingBridge2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BuildingBridge2OutlineLogo = React.forwardRef<SVGSVGElement, BuildingBridge2OutlineLogoProps>(
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
      <path d="M6 7h12a2 2 0 0 1 2 2v9a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-2a4 4 0 0 0 -8 0v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-9a2 2 0 0 1 2 -2" />
    </svg>
  )
);

BuildingBridge2OutlineLogo.displayName = "BuildingBridge2OutlineLogo";

export const BuildingBridge2OutlineLogoMetadata = {
  id: "building-bridge-2-outline",
  baseId: "building-bridge-2-outline",
  variant: "default",
  name: "Building Bridge 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BuildingBridge2OutlineLogo;
