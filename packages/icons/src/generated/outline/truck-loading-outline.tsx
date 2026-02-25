/**
 * Auto-generated logo component: Truck Loading Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TruckLoadingOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TruckLoadingOutlineLogo = React.forwardRef<SVGSVGElement, TruckLoadingOutlineLogoProps>(
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
      <path d="M2 3h1a2 2 0 0 1 2 2v10a2 2 0 0 0 2 2h15" />
  <path d="M9 9a3 3 0 0 1 3 -3h4a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-4a3 3 0 0 1 -3 -3l0 -2" />
  <path d="M7 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M16 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    </svg>
  )
);

TruckLoadingOutlineLogo.displayName = "TruckLoadingOutlineLogo";

export const TruckLoadingOutlineLogoMetadata = {
  id: "truck-loading-outline",
  baseId: "truck-loading-outline",
  variant: "default",
  name: "Truck Loading Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TruckLoadingOutlineLogo;
