/**
 * Auto-generated logo component: Caravan Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CaravanOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CaravanOutlineLogo = React.forwardRef<SVGSVGElement, CaravanOutlineLogoProps>(
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
      <path d="M7 18a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
  <path d="M11 18h7a2 2 0 0 0 2 -2v-7a2 2 0 0 0 -2 -2h-9.5a5.5 5.5 0 0 0 -5.5 5.5v3.5a2 2 0 0 0 2 2h2" />
  <path d="M8 7l7 -3l1 3" />
  <path d="M13 11.5a.5 .5 0 0 1 .5 -.5h2a.5 .5 0 0 1 .5 .5v2a.5 .5 0 0 1 -.5 .5h-2a.5 .5 0 0 1 -.5 -.5l0 -2" />
  <path d="M20 16h2" />
    </svg>
  )
);

CaravanOutlineLogo.displayName = "CaravanOutlineLogo";

export const CaravanOutlineLogoMetadata = {
  id: "caravan-outline",
  baseId: "caravan-outline",
  variant: "default",
  name: "Caravan Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CaravanOutlineLogo;
