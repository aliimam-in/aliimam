/**
 * Auto-generated logo component: Barcode (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BarcodeLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BarcodeLogo = React.forwardRef<SVGSVGElement, BarcodeLogoProps>(
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
      <path d="M3 5v14" />
  <path d="M8 5v14" />
  <path d="M12 5v14" />
  <path d="M17 5v14" />
  <path d="M21 5v14" />
    </svg>
  )
);

BarcodeLogo.displayName = "BarcodeLogo";

export const BarcodeLogoMetadata = {
  id: "barcode",
  baseId: "barcode",
  variant: "default",
  name: "Barcode",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BarcodeLogo;
