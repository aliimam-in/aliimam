/**
 * Auto-generated logo component: Device Ipad Exclamation Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceIpadExclamationOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceIpadExclamationOutlineLogo = React.forwardRef<SVGSVGElement, DeviceIpadExclamationOutlineLogoProps>(
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
      <path d="M15 21h-9a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v7" />
  <path d="M9 18h6" />
  <path d="M19 16v3" />
  <path d="M19 22v.01" />
    </svg>
  )
);

DeviceIpadExclamationOutlineLogo.displayName = "DeviceIpadExclamationOutlineLogo";

export const DeviceIpadExclamationOutlineLogoMetadata = {
  id: "device-ipad-exclamation-outline",
  baseId: "device-ipad-exclamation-outline",
  variant: "default",
  name: "Device Ipad Exclamation Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceIpadExclamationOutlineLogo;
