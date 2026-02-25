/**
 * Auto-generated logo component: Battery Vertical 4 Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BatteryVertical4FilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BatteryVertical4FilledLogo = React.forwardRef<SVGSVGElement, BatteryVertical4FilledLogoProps>(
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
      <path d="M13.5 3a1.5 1.5 0 0 1 1.395 .948l.018 .052h.087a3 3 0 0 1 2.995 2.824l.005 .176v11a3 3 0 0 1 -3 3h-6a3 3 0 0 1 -3 -3v-11a3 3 0 0 1 3 -3h.086l.019 -.052a1.5 1.5 0 0 1 1.25 -.941l.145 -.007zm.5 13h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0 -2m0 -3h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0 -2m0 -3h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0 -2m0 -3h-4a1 1 0 1 0 0 2h4a1 1 0 0 0 0 -2" />
    </svg>
  )
);

BatteryVertical4FilledLogo.displayName = "BatteryVertical4FilledLogo";

export const BatteryVertical4FilledLogoMetadata = {
  id: "battery-vertical-4-filled",
  baseId: "battery-vertical-4-filled",
  variant: "default",
  name: "Battery Vertical 4 Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BatteryVertical4FilledLogo;
