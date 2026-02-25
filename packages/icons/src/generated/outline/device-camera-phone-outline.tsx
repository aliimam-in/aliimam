/**
 * Auto-generated logo component: Device Camera Phone Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceCameraPhoneOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceCameraPhoneOutlineLogo = React.forwardRef<SVGSVGElement, DeviceCameraPhoneOutlineLogoProps>(
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
      <path d="M16 8.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0" />
  <path d="M13 7h-8a2 2 0 0 0 -2 2v7a2 2 0 0 0 2 2h13a2 2 0 0 0 2 -2v-2" />
  <path d="M17 15v-1" />
    </svg>
  )
);

DeviceCameraPhoneOutlineLogo.displayName = "DeviceCameraPhoneOutlineLogo";

export const DeviceCameraPhoneOutlineLogoMetadata = {
  id: "device-camera-phone-outline",
  baseId: "device-camera-phone-outline",
  variant: "default",
  name: "Device Camera Phone Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceCameraPhoneOutlineLogo;
