/**
 * Auto-generated logo component: Devices Check Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DevicesCheckOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DevicesCheckOutlineLogo = React.forwardRef<SVGSVGElement, DevicesCheckOutlineLogoProps>(
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
      <path d="M13 15.5v-6.5a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v4" />
  <path d="M18 8v-3a1 1 0 0 0 -1 -1h-13a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h7" />
  <path d="M16 9h2" />
  <path d="M15 19l2 2l4 -4" />
    </svg>
  )
);

DevicesCheckOutlineLogo.displayName = "DevicesCheckOutlineLogo";

export const DevicesCheckOutlineLogoMetadata = {
  id: "devices-check-outline",
  baseId: "devices-check-outline",
  variant: "default",
  name: "Devices Check Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DevicesCheckOutlineLogo;
