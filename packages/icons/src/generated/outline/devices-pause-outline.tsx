/**
 * Auto-generated logo component: Devices Pause Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DevicesPauseOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DevicesPauseOutlineLogo = React.forwardRef<SVGSVGElement, DevicesPauseOutlineLogoProps>(
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
      <path d="M13 19v-10a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v4" />
  <path d="M18 8v-3a1 1 0 0 0 -1 -1h-13a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h9" />
  <path d="M17 17v5" />
  <path d="M21 17v5" />
  <path d="M16 9h2" />
    </svg>
  )
);

DevicesPauseOutlineLogo.displayName = "DevicesPauseOutlineLogo";

export const DevicesPauseOutlineLogoMetadata = {
  id: "devices-pause-outline",
  baseId: "devices-pause-outline",
  variant: "default",
  name: "Devices Pause Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DevicesPauseOutlineLogo;
