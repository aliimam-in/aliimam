/**
 * Auto-generated logo component: Building Stadium Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BuildingStadiumOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BuildingStadiumOutlineLogo = React.forwardRef<SVGSVGElement, BuildingStadiumOutlineLogoProps>(
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
      <path d="M4 12a8 2 0 1 0 16 0a8 2 0 1 0 -16 0" />
  <path d="M4 12v7c0 .94 2.51 1.785 6 2v-3h4v3c3.435 -.225 6 -1.07 6 -2v-7" />
  <path d="M15 6h4v-3h-4v7" />
  <path d="M7 6h4v-3h-4v7" />
    </svg>
  )
);

BuildingStadiumOutlineLogo.displayName = "BuildingStadiumOutlineLogo";

export const BuildingStadiumOutlineLogoMetadata = {
  id: "building-stadium-outline",
  baseId: "building-stadium-outline",
  variant: "default",
  name: "Building Stadium Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BuildingStadiumOutlineLogo;
