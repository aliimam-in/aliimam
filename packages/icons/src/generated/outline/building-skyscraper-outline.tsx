/**
 * Auto-generated logo component: Building Skyscraper Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BuildingSkyscraperOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BuildingSkyscraperOutlineLogo = React.forwardRef<SVGSVGElement, BuildingSkyscraperOutlineLogoProps>(
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
  <path d="M5 21v-14l8 -4v18" />
  <path d="M19 21v-10l-6 -4" />
  <path d="M9 9l0 .01" />
  <path d="M9 12l0 .01" />
  <path d="M9 15l0 .01" />
  <path d="M9 18l0 .01" />
    </svg>
  )
);

BuildingSkyscraperOutlineLogo.displayName = "BuildingSkyscraperOutlineLogo";

export const BuildingSkyscraperOutlineLogoMetadata = {
  id: "building-skyscraper-outline",
  baseId: "building-skyscraper-outline",
  variant: "default",
  name: "Building Skyscraper Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BuildingSkyscraperOutlineLogo;
