/**
 * Auto-generated logo component: Battery (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BatteryLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BatteryLogo = React.forwardRef<SVGSVGElement, BatteryLogoProps>(
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
      <rect x="1" y="6" width="18" height="12" rx="2" ry="2"/><line x1="23" y1="13" x2="23" y2="11"/>
    </svg>
  )
);

BatteryLogo.displayName = "BatteryLogo";

export const BatteryLogoMetadata = {
  id: "battery",
  baseId: "battery",
  variant: "default",
  name: "Battery",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BatteryLogo;
