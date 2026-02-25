/**
 * Auto-generated logo component: Battery Low (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BatteryLowLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BatteryLowLogo = React.forwardRef<SVGSVGElement, BatteryLowLogoProps>(
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
      <path d="M22 14v-4" />
  <path d="M6 14v-4" />
  <rect x="2" y="6" width="16" height="12" rx="2" />
    </svg>
  )
);

BatteryLowLogo.displayName = "BatteryLowLogo";

export const BatteryLowLogoMetadata = {
  id: "battery-low",
  baseId: "battery-low",
  variant: "default",
  name: "Battery Low",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BatteryLowLogo;
