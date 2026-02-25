/**
 * Auto-generated logo component: Bike Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BikeOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BikeOffOutlineLogo = React.forwardRef<SVGSVGElement, BikeOffOutlineLogoProps>(
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
      <path d="M2 18a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M16.437 16.44a3 3 0 0 0 4.123 4.123m1.44 -2.563a3 3 0 0 0 -3 -3" />
  <path d="M12 19v-4l-3 -3l1.665 -1.332m2.215 -1.772l1.12 -.896l2 3h3" />
  <path d="M16 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

BikeOffOutlineLogo.displayName = "BikeOffOutlineLogo";

export const BikeOffOutlineLogoMetadata = {
  id: "bike-off-outline",
  baseId: "bike-off-outline",
  variant: "default",
  name: "Bike Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BikeOffOutlineLogo;
