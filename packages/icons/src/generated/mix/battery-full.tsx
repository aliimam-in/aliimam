/**
 * Auto-generated logo component: Battery Full (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BatteryFullLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BatteryFullLogo = React.forwardRef<SVGSVGElement, BatteryFullLogoProps>(
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
      <path d="M10 10v4" />
  <path d="M14 10v4" />
  <path d="M22 14v-4" />
  <path d="M6 10v4" />
  <rect x="2" y="6" width="16" height="12" rx="2" />
    </svg>
  )
);

BatteryFullLogo.displayName = "BatteryFullLogo";

export const BatteryFullLogoMetadata = {
  id: "battery-full",
  baseId: "battery-full",
  variant: "default",
  name: "Battery Full",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BatteryFullLogo;
