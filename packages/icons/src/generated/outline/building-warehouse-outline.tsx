/**
 * Auto-generated logo component: Building Warehouse Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BuildingWarehouseOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BuildingWarehouseOutlineLogo = React.forwardRef<SVGSVGElement, BuildingWarehouseOutlineLogoProps>(
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
      <path d="M3 21v-13l9 -4l9 4v13" />
  <path d="M13 13h4v8h-10v-6h6" />
  <path d="M13 21v-9a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v3" />
    </svg>
  )
);

BuildingWarehouseOutlineLogo.displayName = "BuildingWarehouseOutlineLogo";

export const BuildingWarehouseOutlineLogoMetadata = {
  id: "building-warehouse-outline",
  baseId: "building-warehouse-outline",
  variant: "default",
  name: "Building Warehouse Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BuildingWarehouseOutlineLogo;
