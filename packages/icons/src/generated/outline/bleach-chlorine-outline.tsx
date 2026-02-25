/**
 * Auto-generated logo component: Bleach Chlorine Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BleachChlorineOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BleachChlorineOutlineLogo = React.forwardRef<SVGSVGElement, BleachChlorineOutlineLogoProps>(
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
  <path d="M11 12h-1a2 2 0 1 0 0 4h1" />
  <path d="M14 12v4h2" />
    </svg>
  )
);

BleachChlorineOutlineLogo.displayName = "BleachChlorineOutlineLogo";

export const BleachChlorineOutlineLogoMetadata = {
  id: "bleach-chlorine-outline",
  baseId: "bleach-chlorine-outline",
  variant: "default",
  name: "Bleach Chlorine Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BleachChlorineOutlineLogo;
