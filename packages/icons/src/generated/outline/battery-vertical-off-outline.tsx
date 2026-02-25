/**
 * Auto-generated logo component: Battery Vertical Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BatteryVerticalOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BatteryVerticalOffOutlineLogo = React.forwardRef<SVGSVGElement, BatteryVerticalOffOutlineLogoProps>(
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
      <path d="M3 3l18 18" />
  <path d="M17 13v-6a2 2 0 0 0 -2 -2h-.5a.5 .5 0 0 1 -.5 -.5a.5 .5 0 0 0 -.5 -.5h-3a.5 .5 0 0 0 -.5 .5a.5 .5 0 0 1 -.5 .5h-.5m-2 2v11a2 2 0 0 0 2 2h6a2 2 0 0 0 2 -2v-1" />
    </svg>
  )
);

BatteryVerticalOffOutlineLogo.displayName = "BatteryVerticalOffOutlineLogo";

export const BatteryVerticalOffOutlineLogoMetadata = {
  id: "battery-vertical-off-outline",
  baseId: "battery-vertical-off-outline",
  variant: "default",
  name: "Battery Vertical Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BatteryVerticalOffOutlineLogo;
