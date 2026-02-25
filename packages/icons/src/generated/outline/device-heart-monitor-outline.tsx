/**
 * Auto-generated logo component: Device Heart Monitor Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceHeartMonitorOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceHeartMonitorOutlineLogo = React.forwardRef<SVGSVGElement, DeviceHeartMonitorOutlineLogoProps>(
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
      <path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -12" />
  <path d="M4 9h6l1 -2l2 4l1 -2h6" />
  <path d="M4 14h16" />
  <path d="M14 17v.01" />
  <path d="M17 17v.01" />
    </svg>
  )
);

DeviceHeartMonitorOutlineLogo.displayName = "DeviceHeartMonitorOutlineLogo";

export const DeviceHeartMonitorOutlineLogoMetadata = {
  id: "device-heart-monitor-outline",
  baseId: "device-heart-monitor-outline",
  variant: "default",
  name: "Device Heart Monitor Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceHeartMonitorOutlineLogo;
