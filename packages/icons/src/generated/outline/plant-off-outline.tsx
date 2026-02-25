/**
 * Auto-generated logo component: Plant Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PlantOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PlantOffOutlineLogo = React.forwardRef<SVGSVGElement, PlantOffOutlineLogoProps>(
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
      <path d="M17 17v2a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2v-4h8" />
  <path d="M11.9 7.908a6 6 0 0 0 -4.79 -4.806m-4.11 -.102v2a6 6 0 0 0 6 6h2" />
  <path d="M12.531 8.528a6 6 0 0 1 5.469 -3.528h3v1a6 6 0 0 1 -5.037 5.923" />
  <path d="M12 15v-3" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

PlantOffOutlineLogo.displayName = "PlantOffOutlineLogo";

export const PlantOffOutlineLogoMetadata = {
  id: "plant-off-outline",
  baseId: "plant-off-outline",
  variant: "default",
  name: "Plant Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PlantOffOutlineLogo;
