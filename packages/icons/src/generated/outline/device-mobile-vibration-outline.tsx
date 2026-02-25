/**
 * Auto-generated logo component: Device Mobile Vibration Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceMobileVibrationOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceMobileVibrationOutlineLogo = React.forwardRef<SVGSVGElement, DeviceMobileVibrationOutlineLogoProps>(
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
      <path d="M3 5a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2l0 -14" />
  <path d="M8 4l2 0" />
  <path d="M9 17l0 .01" />
  <path d="M21 6l-2 3l2 3l-2 3l2 3" />
    </svg>
  )
);

DeviceMobileVibrationOutlineLogo.displayName = "DeviceMobileVibrationOutlineLogo";

export const DeviceMobileVibrationOutlineLogoMetadata = {
  id: "device-mobile-vibration-outline",
  baseId: "device-mobile-vibration-outline",
  variant: "default",
  name: "Device Mobile Vibration Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceMobileVibrationOutlineLogo;
