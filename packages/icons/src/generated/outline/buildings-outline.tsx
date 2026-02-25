/**
 * Auto-generated logo component: Buildings Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BuildingsOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BuildingsOutlineLogo = React.forwardRef<SVGSVGElement, BuildingsOutlineLogoProps>(
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
      <path d="M4 21v-15c0 -1 1 -2 2 -2h5c1 0 2 1 2 2v15" />
  <path d="M16 8h2c1 0 2 1 2 2v11" />
  <path d="M3 21h18" />
  <path d="M10 12v.01" />
  <path d="M10 16v.01" />
  <path d="M10 8v.01" />
  <path d="M7 12v.01" />
  <path d="M7 16v.01" />
  <path d="M7 8v.01" />
  <path d="M17 12v.01" />
  <path d="M17 16v.01" />
    </svg>
  )
);

BuildingsOutlineLogo.displayName = "BuildingsOutlineLogo";

export const BuildingsOutlineLogoMetadata = {
  id: "buildings-outline",
  baseId: "buildings-outline",
  variant: "default",
  name: "Buildings Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BuildingsOutlineLogo;
