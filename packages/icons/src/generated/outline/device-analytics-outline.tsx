/**
 * Auto-generated logo component: Device Analytics Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceAnalyticsOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceAnalyticsOutlineLogo = React.forwardRef<SVGSVGElement, DeviceAnalyticsOutlineLogoProps>(
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
  <path d="M7 20l10 0" />
  <path d="M9 16l0 4" />
  <path d="M15 16l0 4" />
  <path d="M8 12l3 -3l2 2l3 -3" />
    </svg>
  )
);

DeviceAnalyticsOutlineLogo.displayName = "DeviceAnalyticsOutlineLogo";

export const DeviceAnalyticsOutlineLogoMetadata = {
  id: "device-analytics-outline",
  baseId: "device-analytics-outline",
  variant: "default",
  name: "Device Analytics Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceAnalyticsOutlineLogo;
