/**
 * Auto-generated logo component: Battery Warning (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BatteryWarningLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BatteryWarningLogo = React.forwardRef<SVGSVGElement, BatteryWarningLogoProps>(
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
      <path d="M10 17h.01" />
  <path d="M10 7v6" />
  <path d="M14 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2" />
  <path d="M22 14v-4" />
  <path d="M6 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2" />
    </svg>
  )
);

BatteryWarningLogo.displayName = "BatteryWarningLogo";

export const BatteryWarningLogoMetadata = {
  id: "battery-warning",
  baseId: "battery-warning",
  variant: "default",
  name: "Battery Warning",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BatteryWarningLogo;
