/**
 * Auto-generated logo component: Battery Vertical 4 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BatteryVertical4OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BatteryVertical4OutlineLogo = React.forwardRef<SVGSVGElement, BatteryVertical4OutlineLogoProps>(
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
  <path d="M10 14h4" />
  <path d="M10 11h4" />
  <path d="M10 8h4" />
    </svg>
  )
);

BatteryVertical4OutlineLogo.displayName = "BatteryVertical4OutlineLogo";

export const BatteryVertical4OutlineLogoMetadata = {
  id: "battery-vertical-4-outline",
  baseId: "battery-vertical-4-outline",
  variant: "default",
  name: "Battery Vertical 4 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BatteryVertical4OutlineLogo;
