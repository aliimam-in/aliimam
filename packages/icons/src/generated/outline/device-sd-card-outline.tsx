/**
 * Auto-generated logo component: Device Sd Card Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceSdCardOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceSdCardOutlineLogo = React.forwardRef<SVGSVGElement, DeviceSdCardOutlineLogoProps>(
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
      <path d="M7 21h10a2 2 0 0 0 2 -2v-14a2 2 0 0 0 -2 -2h-6.172a2 2 0 0 0 -1.414 .586l-3.828 3.828a2 2 0 0 0 -.586 1.414v10.172a2 2 0 0 0 2 2" />
  <path d="M13 6v2" />
  <path d="M16 6v2" />
  <path d="M10 7v1" />
    </svg>
  )
);

DeviceSdCardOutlineLogo.displayName = "DeviceSdCardOutlineLogo";

export const DeviceSdCardOutlineLogoMetadata = {
  id: "device-sd-card-outline",
  baseId: "device-sd-card-outline",
  variant: "default",
  name: "Device Sd Card Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceSdCardOutlineLogo;
