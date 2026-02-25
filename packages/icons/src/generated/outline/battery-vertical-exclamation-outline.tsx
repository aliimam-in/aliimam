/**
 * Auto-generated logo component: Battery Vertical Exclamation Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BatteryVerticalExclamationOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BatteryVerticalExclamationOutlineLogo = React.forwardRef<SVGSVGElement, BatteryVerticalExclamationOutlineLogoProps>(
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
      <path d="M17 12v-5c0 -1.105 -.895 -2 -2 -2h-.5c-.276 0 -.5 -.224 -.5 -.5s-.224 -.5 -.5 -.5h-3c-.276 0 -.5 .224 -.5 .5s-.224 .5 -.5 .5h-.5c-1.105 0 -2 .895 -2 2v11c0 1.105 .895 2 2 2h6" />
  <path d="M19 16v3" />
  <path d="M19 22v.01" />
    </svg>
  )
);

BatteryVerticalExclamationOutlineLogo.displayName = "BatteryVerticalExclamationOutlineLogo";

export const BatteryVerticalExclamationOutlineLogoMetadata = {
  id: "battery-vertical-exclamation-outline",
  baseId: "battery-vertical-exclamation-outline",
  variant: "default",
  name: "Battery Vertical Exclamation Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BatteryVerticalExclamationOutlineLogo;
