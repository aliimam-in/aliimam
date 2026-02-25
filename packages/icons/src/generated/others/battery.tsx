/**
 * Auto-generated logo component: Battery (default)
 * Category: others
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
      <path d="M 22 14 L 22 10" />
  <rect x="2" y="6" width="16" height="12" rx="2" />
    </svg>
  )
);

BatteryLogo.displayName = "BatteryLogo";

export const BatteryLogoMetadata = {
  id: "battery",
  baseId: "battery",
  variant: "default",
  name: "Battery",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BatteryLogo;
