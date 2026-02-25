/**
 * Auto-generated logo component: Building Airport Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BuildingAirportOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BuildingAirportOutlineLogo = React.forwardRef<SVGSVGElement, BuildingAirportOutlineLogoProps>(
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
      <path d="M3.59 7h8.82a1 1 0 0 1 .902 1.433l-1.44 3a1 1 0 0 1 -.901 .567h-5.942a1 1 0 0 1 -.901 -.567l-1.44 -3a1 1 0 0 1 .901 -1.433" />
  <path d="M6 7l-.78 -2.342a.5 .5 0 0 1 .473 -.658h4.612a.5 .5 0 0 1 .475 .658l-.78 2.342" />
  <path d="M8 2v2" />
  <path d="M6 12v9h4v-9" />
  <path d="M3 21h18" />
  <path d="M22 5h-6l-1 -1" />
  <path d="M18 3l2 2l-2 2" />
  <path d="M10 17h7a2 2 0 0 1 2 2v2" />
    </svg>
  )
);

BuildingAirportOutlineLogo.displayName = "BuildingAirportOutlineLogo";

export const BuildingAirportOutlineLogoMetadata = {
  id: "building-airport-outline",
  baseId: "building-airport-outline",
  variant: "default",
  name: "Building Airport Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BuildingAirportOutlineLogo;
