/**
 * Auto-generated logo component: Device Watch Share Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceWatchShareOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceWatchShareOutlineLogo = React.forwardRef<SVGSVGElement, DeviceWatchShareOutlineLogoProps>(
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
      <path d="M12.5 18h-3.5a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v4" />
  <path d="M9 18v3h3" />
  <path d="M9 6v-3h6v3" />
  <path d="M16 22l5 -5" />
  <path d="M21 21.5v-4.5h-4.5" />
    </svg>
  )
);

DeviceWatchShareOutlineLogo.displayName = "DeviceWatchShareOutlineLogo";

export const DeviceWatchShareOutlineLogoMetadata = {
  id: "device-watch-share-outline",
  baseId: "device-watch-share-outline",
  variant: "default",
  name: "Device Watch Share Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceWatchShareOutlineLogo;
