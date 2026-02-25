/**
 * Auto-generated logo component: Devices Share Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DevicesShareOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DevicesShareOutlineLogo = React.forwardRef<SVGSVGElement, DevicesShareOutlineLogoProps>(
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
      <path d="M13 15v-6a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v4" />
  <path d="M18 8v-3a1 1 0 0 0 -1 -1h-13a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h9" />
  <path d="M16 22l5 -5" />
  <path d="M21 21.5v-4.5h-4.5" />
  <path d="M16 9h2" />
    </svg>
  )
);

DevicesShareOutlineLogo.displayName = "DevicesShareOutlineLogo";

export const DevicesShareOutlineLogoMetadata = {
  id: "devices-share-outline",
  baseId: "devices-share-outline",
  variant: "default",
  name: "Devices Share Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DevicesShareOutlineLogo;
