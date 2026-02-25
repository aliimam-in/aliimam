/**
 * Auto-generated logo component: Device Mobile Pause Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceMobilePauseOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceMobilePauseOutlineLogo = React.forwardRef<SVGSVGElement, DeviceMobilePauseOutlineLogoProps>(
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
      <path d="M13 21h-5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8" />
  <path d="M17 17v5" />
  <path d="M21 17v5" />
  <path d="M11 4h2" />
  <path d="M12 17v.01" />
    </svg>
  )
);

DeviceMobilePauseOutlineLogo.displayName = "DeviceMobilePauseOutlineLogo";

export const DeviceMobilePauseOutlineLogoMetadata = {
  id: "device-mobile-pause-outline",
  baseId: "device-mobile-pause-outline",
  variant: "default",
  name: "Device Mobile Pause Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceMobilePauseOutlineLogo;
