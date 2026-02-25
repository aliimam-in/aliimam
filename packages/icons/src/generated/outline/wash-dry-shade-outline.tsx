/**
 * Auto-generated logo component: Wash Dry Shade Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface WashDryShadeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const WashDryShadeOutlineLogo = React.forwardRef<SVGSVGElement, WashDryShadeOutlineLogoProps>(
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
  <path d="M3 11l8 -8" />
  <path d="M3 17l14 -14" />
    </svg>
  )
);

WashDryShadeOutlineLogo.displayName = "WashDryShadeOutlineLogo";

export const WashDryShadeOutlineLogoMetadata = {
  id: "wash-dry-shade-outline",
  baseId: "wash-dry-shade-outline",
  variant: "default",
  name: "Wash Dry Shade Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default WashDryShadeOutlineLogo;
