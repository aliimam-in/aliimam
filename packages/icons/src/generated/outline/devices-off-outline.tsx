/**
 * Auto-generated logo component: Devices Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DevicesOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DevicesOffOutlineLogo = React.forwardRef<SVGSVGElement, DevicesOffOutlineLogoProps>(
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
      <path d="M13 9a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v8m-1 3h-6a1 1 0 0 1 -1 -1v-6" />
  <path d="M18 8v-3a1 1 0 0 0 -1 -1h-9m-4 0a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h9" />
  <path d="M16 9h2" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

DevicesOffOutlineLogo.displayName = "DevicesOffOutlineLogo";

export const DevicesOffOutlineLogoMetadata = {
  id: "devices-off-outline",
  baseId: "devices-off-outline",
  variant: "default",
  name: "Devices Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DevicesOffOutlineLogo;
