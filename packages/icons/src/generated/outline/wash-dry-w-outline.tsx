/**
 * Auto-generated logo component: Wash Dry W Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface WashDryWOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const WashDryWOutlineLogo = React.forwardRef<SVGSVGElement, WashDryWOutlineLogoProps>(
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
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
  <path d="M8 8l1.5 8h1l1.5 -6l1.5 6h1l1.5 -8" />
    </svg>
  )
);

WashDryWOutlineLogo.displayName = "WashDryWOutlineLogo";

export const WashDryWOutlineLogoMetadata = {
  id: "wash-dry-w-outline",
  baseId: "wash-dry-w-outline",
  variant: "default",
  name: "Wash Dry W Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default WashDryWOutlineLogo;
