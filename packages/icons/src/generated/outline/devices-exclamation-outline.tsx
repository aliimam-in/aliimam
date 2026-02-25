/**
 * Auto-generated logo component: Devices Exclamation Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DevicesExclamationOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DevicesExclamationOutlineLogo = React.forwardRef<SVGSVGElement, DevicesExclamationOutlineLogoProps>(
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
      <path d="M15 20h-1a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v3.5" />
  <path d="M18 8v-3a1 1 0 0 0 -1 -1h-13a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h9" />
  <path d="M16 9h2" />
  <path d="M19 16v3" />
  <path d="M19 22v.01" />
    </svg>
  )
);

DevicesExclamationOutlineLogo.displayName = "DevicesExclamationOutlineLogo";

export const DevicesExclamationOutlineLogoMetadata = {
  id: "devices-exclamation-outline",
  baseId: "devices-exclamation-outline",
  variant: "default",
  name: "Devices Exclamation Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DevicesExclamationOutlineLogo;
