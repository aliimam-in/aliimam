/**
 * Auto-generated logo component: Building Estate Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BuildingEstateOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BuildingEstateOutlineLogo = React.forwardRef<SVGSVGElement, BuildingEstateOutlineLogoProps>(
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
      <path d="M3 21h18" />
  <path d="M19 21v-4" />
  <path d="M19 17a2 2 0 0 0 2 -2v-2a2 2 0 1 0 -4 0v2a2 2 0 0 0 2 2" />
  <path d="M14 21v-14a3 3 0 0 0 -3 -3h-4a3 3 0 0 0 -3 3v14" />
  <path d="M9 17v4" />
  <path d="M8 13h2" />
  <path d="M8 9h2" />
    </svg>
  )
);

BuildingEstateOutlineLogo.displayName = "BuildingEstateOutlineLogo";

export const BuildingEstateOutlineLogoMetadata = {
  id: "building-estate-outline",
  baseId: "building-estate-outline",
  variant: "default",
  name: "Building Estate Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BuildingEstateOutlineLogo;
