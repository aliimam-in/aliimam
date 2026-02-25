/**
 * Auto-generated logo component: Device Mobile Cancel Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceMobileCancelOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceMobileCancelOutlineLogo = React.forwardRef<SVGSVGElement, DeviceMobileCancelOutlineLogoProps>(
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
      <path d="M12 21h-4a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v7" />
  <path d="M16 19a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M17 21l4 -4" />
  <path d="M11 4h2" />
  <path d="M12 17v.01" />
    </svg>
  )
);

DeviceMobileCancelOutlineLogo.displayName = "DeviceMobileCancelOutlineLogo";

export const DeviceMobileCancelOutlineLogoMetadata = {
  id: "device-mobile-cancel-outline",
  baseId: "device-mobile-cancel-outline",
  variant: "default",
  name: "Device Mobile Cancel Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceMobileCancelOutlineLogo;
