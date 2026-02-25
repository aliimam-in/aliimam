/**
 * Auto-generated logo component: Device Mobile Search Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceMobileSearchOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceMobileSearchOutlineLogo = React.forwardRef<SVGSVGElement, DeviceMobileSearchOutlineLogoProps>(
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
      <path d="M12 21h-4a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v6" />
  <path d="M15 18a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M20.2 20.2l1.8 1.8" />
  <path d="M11 4h2" />
  <path d="M12 17v.01" />
    </svg>
  )
);

DeviceMobileSearchOutlineLogo.displayName = "DeviceMobileSearchOutlineLogo";

export const DeviceMobileSearchOutlineLogoMetadata = {
  id: "device-mobile-search-outline",
  baseId: "device-mobile-search-outline",
  variant: "default",
  name: "Device Mobile Search Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceMobileSearchOutlineLogo;
