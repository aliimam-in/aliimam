/**
 * Auto-generated logo component: Device Mobile Message Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceMobileMessageOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceMobileMessageOutlineLogo = React.forwardRef<SVGSVGElement, DeviceMobileMessageOutlineLogoProps>(
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
      <path d="M11 3h10v8h-3l-4 2v-2h-3l0 -8" />
  <path d="M15 16v4a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1h2" />
  <path d="M10 18v.01" />
    </svg>
  )
);

DeviceMobileMessageOutlineLogo.displayName = "DeviceMobileMessageOutlineLogo";

export const DeviceMobileMessageOutlineLogoMetadata = {
  id: "device-mobile-message-outline",
  baseId: "device-mobile-message-outline",
  variant: "default",
  name: "Device Mobile Message Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceMobileMessageOutlineLogo;
