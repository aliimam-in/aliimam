/**
 * Auto-generated logo component: Ship Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ShipOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ShipOffOutlineLogo = React.forwardRef<SVGSVGElement, ShipOffOutlineLogoProps>(
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
      <path d="M2 20a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1" />
  <path d="M4 18l-1 -5h10m4 0h4l-1.334 2.668" />
  <path d="M5 13v-6h2m4 0h2l4 6" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

ShipOffOutlineLogo.displayName = "ShipOffOutlineLogo";

export const ShipOffOutlineLogoMetadata = {
  id: "ship-off-outline",
  baseId: "ship-off-outline",
  variant: "default",
  name: "Ship Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ShipOffOutlineLogo;
