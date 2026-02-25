/**
 * Auto-generated logo component: Barcode Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BarcodeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BarcodeOutlineLogo = React.forwardRef<SVGSVGElement, BarcodeOutlineLogoProps>(
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
      <path d="M4 7v-1a2 2 0 0 1 2 -2h2" />
  <path d="M4 17v1a2 2 0 0 0 2 2h2" />
  <path d="M16 4h2a2 2 0 0 1 2 2v1" />
  <path d="M16 20h2a2 2 0 0 0 2 -2v-1" />
  <path d="M5 11h1v2h-1l0 -2" />
  <path d="M10 11l0 2" />
  <path d="M14 11h1v2h-1l0 -2" />
  <path d="M19 11l0 2" />
    </svg>
  )
);

BarcodeOutlineLogo.displayName = "BarcodeOutlineLogo";

export const BarcodeOutlineLogoMetadata = {
  id: "barcode-outline",
  baseId: "barcode-outline",
  variant: "default",
  name: "Barcode Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BarcodeOutlineLogo;
