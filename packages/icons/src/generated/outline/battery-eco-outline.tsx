/**
 * Auto-generated logo component: Battery Eco Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BatteryEcoOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BatteryEcoOutlineLogo = React.forwardRef<SVGSVGElement, BatteryEcoOutlineLogoProps>(
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
      <path d="M4 9a2 2 0 0 1 2 -2h11a2 2 0 0 1 2 2v.5a.5 .5 0 0 0 .5 .5a.5 .5 0 0 1 .5 .5v3a.5 .5 0 0 1 -.5 .5a.5 .5 0 0 0 -.5 .5v.5a2 2 0 0 1 -2 2h-5.5" />
  <path d="M3 16.143c0 -2.84 2.09 -5.143 4.667 -5.143h2.333v.857c0 2.84 -2.09 5.143 -4.667 5.143h-2.333v-.857" />
  <path d="M3 20v-3" />
    </svg>
  )
);

BatteryEcoOutlineLogo.displayName = "BatteryEcoOutlineLogo";

export const BatteryEcoOutlineLogoMetadata = {
  id: "battery-eco-outline",
  baseId: "battery-eco-outline",
  variant: "default",
  name: "Battery Eco Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BatteryEcoOutlineLogo;
