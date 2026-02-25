/**
 * Auto-generated logo component: Battery Automotive Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BatteryAutomotiveOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BatteryAutomotiveOutlineLogo = React.forwardRef<SVGSVGElement, BatteryAutomotiveOutlineLogoProps>(
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
      <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2l0 -10" />
  <path d="M6 5v-2" />
  <path d="M18 3v2" />
  <path d="M6.5 12h3" />
  <path d="M14.5 12h3" />
  <path d="M16 10.5v3" />
    </svg>
  )
);

BatteryAutomotiveOutlineLogo.displayName = "BatteryAutomotiveOutlineLogo";

export const BatteryAutomotiveOutlineLogoMetadata = {
  id: "battery-automotive-outline",
  baseId: "battery-automotive-outline",
  variant: "default",
  name: "Battery Automotive Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BatteryAutomotiveOutlineLogo;
