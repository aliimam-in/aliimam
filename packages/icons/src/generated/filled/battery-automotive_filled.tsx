/**
 * Auto-generated logo component: Battery Automotive (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BatteryAutomotiveFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BatteryAutomotiveFilledLogo = React.forwardRef<SVGSVGElement, BatteryAutomotiveFilledLogoProps>(
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
      <path d="M18 2a1 1 0 0 1 1 1v1a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-10a3 3 0 0 1 3 -3v-1a1 1 0 1 1 2 0v1h10v-1a1 1 0 0 1 1 -1m-2 7.5a1 1 0 0 0 -1 1v.5h-.5a1 1 0 0 0 0 2h.5v.5a1 1 0 0 0 2 0v-.5h.5a1 1 0 0 0 0 -2h-.5v-.5a1 1 0 0 0 -1 -1m-6.5 1.5h-3a1 1 0 0 0 0 2h3a1 1 0 0 0 0 -2" />
    </svg>
  )
);

BatteryAutomotiveFilledLogo.displayName = "BatteryAutomotiveFilledLogo";

export const BatteryAutomotiveFilledLogoMetadata = {
  id: "battery-automotive_filled",
  baseId: "battery-automotive",
  variant: "filled",
  name: "Battery Automotive",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BatteryAutomotiveFilledLogo;
