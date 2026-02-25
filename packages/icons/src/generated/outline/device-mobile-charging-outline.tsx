/**
 * Auto-generated logo component: Device Mobile Charging Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceMobileChargingOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceMobileChargingOutlineLogo = React.forwardRef<SVGSVGElement, DeviceMobileChargingOutlineLogoProps>(
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
      <path d="M6 5a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2l0 -14" />
  <path d="M11 4h2" />
  <path d="M12 9.5l-1 2.5h2l-1 2.5" />
    </svg>
  )
);

DeviceMobileChargingOutlineLogo.displayName = "DeviceMobileChargingOutlineLogo";

export const DeviceMobileChargingOutlineLogoMetadata = {
  id: "device-mobile-charging-outline",
  baseId: "device-mobile-charging-outline",
  variant: "default",
  name: "Device Mobile Charging Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceMobileChargingOutlineLogo;
