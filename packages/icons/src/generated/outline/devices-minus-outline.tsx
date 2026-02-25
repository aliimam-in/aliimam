/**
 * Auto-generated logo component: Devices Minus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DevicesMinusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DevicesMinusOutlineLogo = React.forwardRef<SVGSVGElement, DevicesMinusOutlineLogoProps>(
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
      <path d="M13 16.5v-7.5a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v6" />
  <path d="M18 8v-3a1 1 0 0 0 -1 -1h-13a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h8" />
  <path d="M16 19h6" />
  <path d="M16 9h2" />
    </svg>
  )
);

DevicesMinusOutlineLogo.displayName = "DevicesMinusOutlineLogo";

export const DevicesMinusOutlineLogoMetadata = {
  id: "devices-minus-outline",
  baseId: "devices-minus-outline",
  variant: "default",
  name: "Devices Minus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DevicesMinusOutlineLogo;
