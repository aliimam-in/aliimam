/**
 * Auto-generated logo component: Device Mobile Bolt Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceMobileBoltOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceMobileBoltOutlineLogo = React.forwardRef<SVGSVGElement, DeviceMobileBoltOutlineLogoProps>(
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
      <path d="M13.5 21h-5.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v7" />
  <path d="M19 16l-2 3h4l-2 3" />
  <path d="M11 4h2" />
  <path d="M12 17v.01" />
    </svg>
  )
);

DeviceMobileBoltOutlineLogo.displayName = "DeviceMobileBoltOutlineLogo";

export const DeviceMobileBoltOutlineLogoMetadata = {
  id: "device-mobile-bolt-outline",
  baseId: "device-mobile-bolt-outline",
  variant: "default",
  name: "Device Mobile Bolt Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceMobileBoltOutlineLogo;
