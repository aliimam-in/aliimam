/**
 * Auto-generated logo component: Battery Medium (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BatteryMediumLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BatteryMediumLogo = React.forwardRef<SVGSVGElement, BatteryMediumLogoProps>(
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
      <path d="M10 14v-4" />
  <path d="M22 14v-4" />
  <path d="M6 14v-4" />
  <rect x="2" y="6" width="16" height="12" rx="2" />
    </svg>
  )
);

BatteryMediumLogo.displayName = "BatteryMediumLogo";

export const BatteryMediumLogoMetadata = {
  id: "battery-medium",
  baseId: "battery-medium",
  variant: "default",
  name: "Battery Medium",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BatteryMediumLogo;
