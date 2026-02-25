/**
 * Auto-generated logo component: Building Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BuildingOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BuildingOffOutlineLogo = React.forwardRef<SVGSVGElement, BuildingOffOutlineLogoProps>(
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
  <path d="M9 12h1" />
  <path d="M9 16h1" />
  <path d="M14 8h1" />
  <path d="M14 16h1" />
  <path d="M5 21v-16" />
  <path d="M7 3h10c1 0 2 1 2 2v10" />
  <path d="M19 19v2" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

BuildingOffOutlineLogo.displayName = "BuildingOffOutlineLogo";

export const BuildingOffOutlineLogoMetadata = {
  id: "building-off-outline",
  baseId: "building-off-outline",
  variant: "default",
  name: "Building Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BuildingOffOutlineLogo;
