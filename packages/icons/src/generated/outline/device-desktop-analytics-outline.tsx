/**
 * Auto-generated logo component: Device Desktop Analytics Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceDesktopAnalyticsOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceDesktopAnalyticsOutlineLogo = React.forwardRef<SVGSVGElement, DeviceDesktopAnalyticsOutlineLogoProps>(
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
      <path d="M3 5a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1l0 -10" />
  <path d="M7 20h10" />
  <path d="M9 16v4" />
  <path d="M15 16v4" />
  <path d="M9 12v-4" />
  <path d="M12 12v-1" />
  <path d="M15 12v-2" />
  <path d="M12 12v-1" />
    </svg>
  )
);

DeviceDesktopAnalyticsOutlineLogo.displayName = "DeviceDesktopAnalyticsOutlineLogo";

export const DeviceDesktopAnalyticsOutlineLogoMetadata = {
  id: "device-desktop-analytics-outline",
  baseId: "device-desktop-analytics-outline",
  variant: "default",
  name: "Device Desktop Analytics Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceDesktopAnalyticsOutlineLogo;
