/**
 * Auto-generated logo component: Device Ipad Horizontal Exclamation Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceIpadHorizontalExclamationOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceIpadHorizontalExclamationOutlineLogo = React.forwardRef<SVGSVGElement, DeviceIpadHorizontalExclamationOutlineLogoProps>(
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
      <path d="M15 20h-10a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v6" />
  <path d="M9 17h6" />
  <path d="M19 16v3" />
  <path d="M19 22v.01" />
    </svg>
  )
);

DeviceIpadHorizontalExclamationOutlineLogo.displayName = "DeviceIpadHorizontalExclamationOutlineLogo";

export const DeviceIpadHorizontalExclamationOutlineLogoMetadata = {
  id: "device-ipad-horizontal-exclamation-outline",
  baseId: "device-ipad-horizontal-exclamation-outline",
  variant: "default",
  name: "Device Ipad Horizontal Exclamation Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceIpadHorizontalExclamationOutlineLogo;
