/**
 * Auto-generated logo component: Building Fortress Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BuildingFortressOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BuildingFortressOutlineLogo = React.forwardRef<SVGSVGElement, BuildingFortressOutlineLogoProps>(
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
      <path d="M7 21h1a1 1 0 0 0 1 -1v-1a3 3 0 0 1 6 0m3 2h1a1 1 0 0 0 1 -1v-15l-3 -2l-3 2v6h-4v-6l-3 -2l-3 2v15a1 1 0 0 0 1 1h2m8 -2v1a1 1 0 0 0 1 1h2" />
  <path d="M7 7v.01" />
  <path d="M7 10v.01" />
  <path d="M7 13v.01" />
  <path d="M17 7v.01" />
  <path d="M17 10v.01" />
  <path d="M17 13v.01" />
    </svg>
  )
);

BuildingFortressOutlineLogo.displayName = "BuildingFortressOutlineLogo";

export const BuildingFortressOutlineLogoMetadata = {
  id: "building-fortress-outline",
  baseId: "building-fortress-outline",
  variant: "default",
  name: "Building Fortress Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BuildingFortressOutlineLogo;
