/**
 * Auto-generated logo component: Device Mobile Share Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceMobileShareOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceMobileShareOutlineLogo = React.forwardRef<SVGSVGElement, DeviceMobileShareOutlineLogoProps>(
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
      <path d="M12 21h-4a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8" />
  <path d="M11 4h2" />
  <path d="M16 22l5 -5" />
  <path d="M21 21.5v-4.5h-4.5" />
  <path d="M12 17v.01" />
    </svg>
  )
);

DeviceMobileShareOutlineLogo.displayName = "DeviceMobileShareOutlineLogo";

export const DeviceMobileShareOutlineLogoMetadata = {
  id: "device-mobile-share-outline",
  baseId: "device-mobile-share-outline",
  variant: "default",
  name: "Device Mobile Share Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceMobileShareOutlineLogo;
