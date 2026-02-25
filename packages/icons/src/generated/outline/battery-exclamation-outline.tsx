/**
 * Auto-generated logo component: Battery Exclamation Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BatteryExclamationOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BatteryExclamationOutlineLogo = React.forwardRef<SVGSVGElement, BatteryExclamationOutlineLogoProps>(
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
      <path d="M9 17h8c1.105 0 2 -.895 2 -2v-.5c0 -.276 .224 -.5 .5 -.5s.5 -.224 .5 -.5v-3c0 -.276 -.224 -.5 -.5 -.5s-.5 -.224 -.5 -.5v-.5c0 -1.105 -.895 -2 -2 -2h-11c-1.105 0 -2 .895 -2 2v3" />
  <path d="M5 16v3" />
  <path d="M5 22v.01" />
    </svg>
  )
);

BatteryExclamationOutlineLogo.displayName = "BatteryExclamationOutlineLogo";

export const BatteryExclamationOutlineLogoMetadata = {
  id: "battery-exclamation-outline",
  baseId: "battery-exclamation-outline",
  variant: "default",
  name: "Battery Exclamation Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BatteryExclamationOutlineLogo;
