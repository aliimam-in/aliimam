/**
 * Auto-generated logo component: Planet Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PlanetOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PlanetOffOutlineLogo = React.forwardRef<SVGSVGElement, PlanetOffOutlineLogoProps>(
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
      <path d="M7.042 7.059a7 7 0 0 0 9.908 9.89m1.581 -2.425a7 7 0 0 0 -9.057 -9.054" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

PlanetOffOutlineLogo.displayName = "PlanetOffOutlineLogo";

export const PlanetOffOutlineLogoMetadata = {
  id: "planet-off-outline",
  baseId: "planet-off-outline",
  variant: "default",
  name: "Planet Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PlanetOffOutlineLogo;
