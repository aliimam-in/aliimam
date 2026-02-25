/**
 * Auto-generated logo component: Battery Vertical Eco Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BatteryVerticalEcoOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BatteryVerticalEcoOutlineLogo = React.forwardRef<SVGSVGElement, BatteryVerticalEcoOutlineLogoProps>(
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
      <path d="M7 18v-11c0 -1.105 .895 -2 2 -2h.5c.276 0 .5 -.224 .5 -.5s.224 -.5 .5 -.5h3c.276 0 .5 .224 .5 .5s.224 .5 .5 .5h.5c1.105 0 2 .895 2 2v1m-8 12c-1.105 0 -2 -.895 -2 -2" />
  <path d="M13 17.143c0 -2.84 2.09 -5.143 4.667 -5.143h2.333v.857c0 2.84 -2.09 5.143 -4.667 5.143h-2.333l0 -.857" />
  <path d="M13 21v-3" />
    </svg>
  )
);

BatteryVerticalEcoOutlineLogo.displayName = "BatteryVerticalEcoOutlineLogo";

export const BatteryVerticalEcoOutlineLogoMetadata = {
  id: "battery-vertical-eco-outline",
  baseId: "battery-vertical-eco-outline",
  variant: "default",
  name: "Battery Vertical Eco Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BatteryVerticalEcoOutlineLogo;
