/**
 * Auto-generated logo component: Caravan (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CaravanLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CaravanLogo = React.forwardRef<SVGSVGElement, CaravanLogoProps>(
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
      <path d="M18 19V9a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a2 2 0 0 0 2 2h2" />
  <path d="M2 9h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2" />
  <path d="M22 17v1a1 1 0 0 1-1 1H10v-9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v9" />
  <circle cx="8" cy="19" r="2" />
    </svg>
  )
);

CaravanLogo.displayName = "CaravanLogo";

export const CaravanLogoMetadata = {
  id: "caravan",
  baseId: "caravan",
  variant: "default",
  name: "Caravan",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CaravanLogo;
