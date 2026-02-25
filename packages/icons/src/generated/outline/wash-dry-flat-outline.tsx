/**
 * Auto-generated logo component: Wash Dry Flat Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface WashDryFlatOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const WashDryFlatOutlineLogo = React.forwardRef<SVGSVGElement, WashDryFlatOutlineLogoProps>(
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
      <path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12" />
  <path d="M7 12h10" />
    </svg>
  )
);

WashDryFlatOutlineLogo.displayName = "WashDryFlatOutlineLogo";

export const WashDryFlatOutlineLogoMetadata = {
  id: "wash-dry-flat-outline",
  baseId: "wash-dry-flat-outline",
  variant: "default",
  name: "Wash Dry Flat Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default WashDryFlatOutlineLogo;
