/**
 * Auto-generated logo component: Gas Station Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GasStationOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GasStationOutlineLogo = React.forwardRef<SVGSVGElement, GasStationOutlineLogoProps>(
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
      <path d="M14 11h1a2 2 0 0 1 2 2v3a1.5 1.5 0 0 0 3 0v-7l-3 -3" />
  <path d="M4 20v-14a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v14" />
  <path d="M3 20l12 0" />
  <path d="M18 7v1a1 1 0 0 0 1 1h1" />
  <path d="M4 11l10 0" />
    </svg>
  )
);

GasStationOutlineLogo.displayName = "GasStationOutlineLogo";

export const GasStationOutlineLogoMetadata = {
  id: "gas-station-outline",
  baseId: "gas-station-outline",
  variant: "default",
  name: "Gas Station Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GasStationOutlineLogo;
