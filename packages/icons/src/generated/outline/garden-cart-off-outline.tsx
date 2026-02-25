/**
 * Auto-generated logo component: Garden Cart Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GardenCartOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GardenCartOffOutlineLogo = React.forwardRef<SVGSVGElement, GardenCartOffOutlineLogoProps>(
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
      <path d="M15.733 15.732a2.5 2.5 0 1 0 3.544 3.527" />
  <path d="M6 8v11a1 1 0 0 0 1.806 .591l3.694 -5.091v.055" />
  <path d="M6 8h2m4 0h9l-3 6.01m-3.319 .693l-4.276 -.45a4 4 0 0 1 -3.296 -2.493l-2.853 -7.13a1 1 0 0 0 -.928 -.63h-1.323" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

GardenCartOffOutlineLogo.displayName = "GardenCartOffOutlineLogo";

export const GardenCartOffOutlineLogoMetadata = {
  id: "garden-cart-off-outline",
  baseId: "garden-cart-off-outline",
  variant: "default",
  name: "Garden Cart Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GardenCartOffOutlineLogo;
