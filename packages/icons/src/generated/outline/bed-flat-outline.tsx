/**
 * Auto-generated logo component: Bed Flat Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BedFlatOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BedFlatOutlineLogo = React.forwardRef<SVGSVGElement, BedFlatOutlineLogoProps>(
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
      <path d="M3 11a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M10 13h11v-2a3 3 0 0 0 -3 -3h-8v5" />
  <path d="M3 16h18" />
    </svg>
  )
);

BedFlatOutlineLogo.displayName = "BedFlatOutlineLogo";

export const BedFlatOutlineLogoMetadata = {
  id: "bed-flat-outline",
  baseId: "bed-flat-outline",
  variant: "default",
  name: "Bed Flat Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BedFlatOutlineLogo;
