/**
 * Auto-generated logo component: Device Ipad Up Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceIpadUpOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceIpadUpOutlineLogo = React.forwardRef<SVGSVGElement, DeviceIpadUpOutlineLogoProps>(
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
      <path d="M9 18h3" />
  <path d="M19 22v-6" />
  <path d="M22 19l-3 -3l-3 3" />
  <path d="M13.5 21h-6.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v7" />
    </svg>
  )
);

DeviceIpadUpOutlineLogo.displayName = "DeviceIpadUpOutlineLogo";

export const DeviceIpadUpOutlineLogoMetadata = {
  id: "device-ipad-up-outline",
  baseId: "device-ipad-up-outline",
  variant: "default",
  name: "Device Ipad Up Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceIpadUpOutlineLogo;
