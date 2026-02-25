/**
 * Auto-generated logo component: Device Tablet Share Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceTabletShareOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceTabletShareOutlineLogo = React.forwardRef<SVGSVGElement, DeviceTabletShareOutlineLogoProps>(
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
      <path d="M12 21h-6a1 1 0 0 1 -1 -1v-16a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v9" />
  <path d="M12.57 16.178a1 1 0 1 0 .016 1.633" />
  <path d="M16 22l5 -5" />
  <path d="M21 21.5v-4.5h-4.5" />
    </svg>
  )
);

DeviceTabletShareOutlineLogo.displayName = "DeviceTabletShareOutlineLogo";

export const DeviceTabletShareOutlineLogoMetadata = {
  id: "device-tablet-share-outline",
  baseId: "device-tablet-share-outline",
  variant: "default",
  name: "Device Tablet Share Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceTabletShareOutlineLogo;
