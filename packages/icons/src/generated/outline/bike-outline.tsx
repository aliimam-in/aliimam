/**
 * Auto-generated logo component: Bike Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BikeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BikeOutlineLogo = React.forwardRef<SVGSVGElement, BikeOutlineLogoProps>(
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
  <path d="M16 18a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M12 19l0 -4l-3 -3l5 -4l2 3l3 0" />
  <path d="M16 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    </svg>
  )
);

BikeOutlineLogo.displayName = "BikeOutlineLogo";

export const BikeOutlineLogoMetadata = {
  id: "bike-outline",
  baseId: "bike-outline",
  variant: "default",
  name: "Bike Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BikeOutlineLogo;
