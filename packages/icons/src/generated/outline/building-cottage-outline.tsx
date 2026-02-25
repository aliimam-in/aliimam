/**
 * Auto-generated logo component: Building Cottage Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BuildingCottageOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BuildingCottageOutlineLogo = React.forwardRef<SVGSVGElement, BuildingCottageOutlineLogoProps>(
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
  <path d="M4 21v-11l2.5 -4.5l5.5 -2.5l5.5 2.5l2.5 4.5v11" />
  <path d="M10 9a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M9 21v-5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v5" />
    </svg>
  )
);

BuildingCottageOutlineLogo.displayName = "BuildingCottageOutlineLogo";

export const BuildingCottageOutlineLogoMetadata = {
  id: "building-cottage-outline",
  baseId: "building-cottage-outline",
  variant: "default",
  name: "Building Cottage Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BuildingCottageOutlineLogo;
