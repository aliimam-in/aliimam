/**
 * Auto-generated logo component: Building Church Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BuildingChurchOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BuildingChurchOutlineLogo = React.forwardRef<SVGSVGElement, BuildingChurchOutlineLogoProps>(
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
  <path d="M10 21v-4a2 2 0 0 1 4 0v4" />
  <path d="M10 5l4 0" />
  <path d="M12 3l0 5" />
  <path d="M6 21v-7m-2 2l8 -8l8 8m-2 -2v7" />
    </svg>
  )
);

BuildingChurchOutlineLogo.displayName = "BuildingChurchOutlineLogo";

export const BuildingChurchOutlineLogoMetadata = {
  id: "building-church-outline",
  baseId: "building-church-outline",
  variant: "default",
  name: "Building Church Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BuildingChurchOutlineLogo;
