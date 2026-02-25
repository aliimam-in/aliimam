/**
 * Auto-generated logo component: Battery Vertical 1 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BatteryVertical1OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BatteryVertical1OutlineLogo = React.forwardRef<SVGSVGElement, BatteryVertical1OutlineLogoProps>(
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
  <path d="M10 17h4" />
    </svg>
  )
);

BatteryVertical1OutlineLogo.displayName = "BatteryVertical1OutlineLogo";

export const BatteryVertical1OutlineLogoMetadata = {
  id: "battery-vertical-1-outline",
  baseId: "battery-vertical-1-outline",
  variant: "default",
  name: "Battery Vertical 1 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BatteryVertical1OutlineLogo;
