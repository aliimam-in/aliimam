/**
 * Auto-generated logo component: Garden Cart Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GardenCartOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GardenCartOutlineLogo = React.forwardRef<SVGSVGElement, GardenCartOutlineLogoProps>(
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
      <path d="M15 17.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0" />
  <path d="M6 8v11a1 1 0 0 0 1.806 .591l3.694 -5.091v.055" />
  <path d="M6 8h15l-3.5 7l-7.1 -.747a4 4 0 0 1 -3.296 -2.493l-2.853 -7.13a1 1 0 0 0 -.928 -.63h-1.323" />
    </svg>
  )
);

GardenCartOutlineLogo.displayName = "GardenCartOutlineLogo";

export const GardenCartOutlineLogoMetadata = {
  id: "garden-cart-outline",
  baseId: "garden-cart-outline",
  variant: "default",
  name: "Garden Cart Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GardenCartOutlineLogo;
