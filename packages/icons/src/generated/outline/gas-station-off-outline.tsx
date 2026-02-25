/**
 * Auto-generated logo component: Gas Station Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GasStationOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GasStationOffOutlineLogo = React.forwardRef<SVGSVGElement, GasStationOffOutlineLogoProps>(
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
      <path d="M15 11a2 2 0 0 1 2 2m3 3v-7l-3 -3" />
  <path d="M4 20v-14c0 -.548 .22 -1.044 .577 -1.405m3.423 -.595h4a2 2 0 0 1 2 2v4m0 4v6" />
  <path d="M3 20h12" />
  <path d="M18 7v1a1 1 0 0 0 1 1h1" />
  <path d="M4 11h7" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

GasStationOffOutlineLogo.displayName = "GasStationOffOutlineLogo";

export const GasStationOffOutlineLogoMetadata = {
  id: "gas-station-off-outline",
  baseId: "gas-station-off-outline",
  variant: "default",
  name: "Gas Station Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GasStationOffOutlineLogo;
