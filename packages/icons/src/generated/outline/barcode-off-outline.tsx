/**
 * Auto-generated logo component: Barcode Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BarcodeOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BarcodeOffOutlineLogo = React.forwardRef<SVGSVGElement, BarcodeOffOutlineLogoProps>(
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
      <path d="M4 7v-1c0 -.552 .224 -1.052 .586 -1.414" />
  <path d="M4 17v1a2 2 0 0 0 2 2h2" />
  <path d="M16 4h2a2 2 0 0 1 2 2v1" />
  <path d="M16 20h2c.551 0 1.05 -.223 1.412 -.584" />
  <path d="M5 11h1v2h-1l0 -2" />
  <path d="M10 11v2" />
  <path d="M15 11v.01" />
  <path d="M19 11v2" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

BarcodeOffOutlineLogo.displayName = "BarcodeOffOutlineLogo";

export const BarcodeOffOutlineLogoMetadata = {
  id: "barcode-off-outline",
  baseId: "barcode-off-outline",
  variant: "default",
  name: "Barcode Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BarcodeOffOutlineLogo;
