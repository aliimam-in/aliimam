/**
 * Auto-generated logo component: Building Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BuildingOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BuildingOutlineLogo = React.forwardRef<SVGSVGElement, BuildingOutlineLogoProps>(
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
  <path d="M9 8l1 0" />
  <path d="M9 12l1 0" />
  <path d="M9 16l1 0" />
  <path d="M14 8l1 0" />
  <path d="M14 12l1 0" />
  <path d="M14 16l1 0" />
  <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16" />
    </svg>
  )
);

BuildingOutlineLogo.displayName = "BuildingOutlineLogo";

export const BuildingOutlineLogoMetadata = {
  id: "building-outline",
  baseId: "building-outline",
  variant: "default",
  name: "Building Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BuildingOutlineLogo;
