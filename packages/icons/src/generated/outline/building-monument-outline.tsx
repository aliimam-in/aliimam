/**
 * Auto-generated logo component: Building Monument Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BuildingMonumentOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BuildingMonumentOutlineLogo = React.forwardRef<SVGSVGElement, BuildingMonumentOutlineLogoProps>(
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
      <path d="M8 18l2 -13l2 -2l2 2l2 13" />
  <path d="M5 21v-3h14v3" />
  <path d="M3 21l18 0" />
    </svg>
  )
);

BuildingMonumentOutlineLogo.displayName = "BuildingMonumentOutlineLogo";

export const BuildingMonumentOutlineLogoMetadata = {
  id: "building-monument-outline",
  baseId: "building-monument-outline",
  variant: "default",
  name: "Building Monument Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BuildingMonumentOutlineLogo;
