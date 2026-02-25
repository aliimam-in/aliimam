/**
 * Auto-generated logo component: Building Plus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BuildingPlusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BuildingPlusOutlineLogo = React.forwardRef<SVGSVGElement, BuildingPlusOutlineLogoProps>(
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
      <path d="M3 21h9" />
  <path d="M9 8h1" />
  <path d="M9 12h1" />
  <path d="M9 16h1" />
  <path d="M14 8h1" />
  <path d="M14 12h1" />
  <path d="M5 21v-16c0 -.53 .211 -1.039 .586 -1.414c.375 -.375 .884 -.586 1.414 -.586h10c.53 0 1.039 .211 1.414 .586c.375 .375 .586 .884 .586 1.414v7" />
  <path d="M16 19h6" />
  <path d="M19 16v6" />
    </svg>
  )
);

BuildingPlusOutlineLogo.displayName = "BuildingPlusOutlineLogo";

export const BuildingPlusOutlineLogoMetadata = {
  id: "building-plus-outline",
  baseId: "building-plus-outline",
  variant: "default",
  name: "Building Plus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BuildingPlusOutlineLogo;
