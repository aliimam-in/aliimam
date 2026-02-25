/**
 * Auto-generated logo component: Building Arch Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BuildingArchOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BuildingArchOutlineLogo = React.forwardRef<SVGSVGElement, BuildingArchOutlineLogoProps>(
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
  <path d="M4 21v-15a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v15" />
  <path d="M9 21v-8a3 3 0 0 1 6 0v8" />
    </svg>
  )
);

BuildingArchOutlineLogo.displayName = "BuildingArchOutlineLogo";

export const BuildingArchOutlineLogoMetadata = {
  id: "building-arch-outline",
  baseId: "building-arch-outline",
  variant: "default",
  name: "Building Arch Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BuildingArchOutlineLogo;
