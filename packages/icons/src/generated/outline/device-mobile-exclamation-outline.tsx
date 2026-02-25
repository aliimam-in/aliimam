/**
 * Auto-generated logo component: Device Mobile Exclamation Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceMobileExclamationOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceMobileExclamationOutlineLogo = React.forwardRef<SVGSVGElement, DeviceMobileExclamationOutlineLogoProps>(
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
      <path d="M15 21h-7a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v7" />
  <path d="M11 4h2" />
  <path d="M12 17v.01" />
  <path d="M19 16v3" />
  <path d="M19 22v.01" />
    </svg>
  )
);

DeviceMobileExclamationOutlineLogo.displayName = "DeviceMobileExclamationOutlineLogo";

export const DeviceMobileExclamationOutlineLogoMetadata = {
  id: "device-mobile-exclamation-outline",
  baseId: "device-mobile-exclamation-outline",
  variant: "default",
  name: "Device Mobile Exclamation Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceMobileExclamationOutlineLogo;
