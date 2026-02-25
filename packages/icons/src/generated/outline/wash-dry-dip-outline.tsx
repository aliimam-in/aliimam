/**
 * Auto-generated logo component: Wash Dry Dip Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface WashDryDipOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const WashDryDipOutlineLogo = React.forwardRef<SVGSVGElement, WashDryDipOutlineLogoProps>(
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
  <path d="M12 7v10" />
  <path d="M16 7v10" />
  <path d="M8 7v10" />
    </svg>
  )
);

WashDryDipOutlineLogo.displayName = "WashDryDipOutlineLogo";

export const WashDryDipOutlineLogoMetadata = {
  id: "wash-dry-dip-outline",
  baseId: "wash-dry-dip-outline",
  variant: "default",
  name: "Wash Dry Dip Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default WashDryDipOutlineLogo;
