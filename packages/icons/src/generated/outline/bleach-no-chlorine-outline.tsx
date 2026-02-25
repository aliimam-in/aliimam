/**
 * Auto-generated logo component: Bleach No Chlorine Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BleachNoChlorineOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BleachNoChlorineOutlineLogo = React.forwardRef<SVGSVGElement, BleachNoChlorineOutlineLogoProps>(
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
      <path d="M5 19h14a2 2 0 0 0 1.84 -2.75l-7.1 -12.25a2 2 0 0 0 -3.5 0l-7.1 12.25a2 2 0 0 0 1.75 2.75" />
  <path d="M6.576 19l7.907 -13.733" />
  <path d="M11.719 19.014l5.346 -9.284" />
    </svg>
  )
);

BleachNoChlorineOutlineLogo.displayName = "BleachNoChlorineOutlineLogo";

export const BleachNoChlorineOutlineLogoMetadata = {
  id: "bleach-no-chlorine-outline",
  baseId: "bleach-no-chlorine-outline",
  variant: "default",
  name: "Bleach No Chlorine Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BleachNoChlorineOutlineLogo;
