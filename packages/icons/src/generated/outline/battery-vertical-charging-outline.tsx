/**
 * Auto-generated logo component: Battery Vertical Charging Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BatteryVerticalChargingOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BatteryVerticalChargingOutlineLogo = React.forwardRef<SVGSVGElement, BatteryVerticalChargingOutlineLogoProps>(
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
      <path d="M7 18v-11a2 2 0 0 1 2 -2h.5a.5 .5 0 0 0 .5 -.5a.5 .5 0 0 1 .5 -.5h3a.5 .5 0 0 1 .5 .5a.5 .5 0 0 0 .5 .5h.5a2 2 0 0 1 2 2v11a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2" />
  <path d="M12.667 8l-2.667 4h4l-2.667 4" />
    </svg>
  )
);

BatteryVerticalChargingOutlineLogo.displayName = "BatteryVerticalChargingOutlineLogo";

export const BatteryVerticalChargingOutlineLogoMetadata = {
  id: "battery-vertical-charging-outline",
  baseId: "battery-vertical-charging-outline",
  variant: "default",
  name: "Battery Vertical Charging Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BatteryVerticalChargingOutlineLogo;
