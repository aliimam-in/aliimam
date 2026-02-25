/**
 * Auto-generated logo component: Wash Dry Hang Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface WashDryHangOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const WashDryHangOutlineLogo = React.forwardRef<SVGSVGElement, WashDryHangOutlineLogoProps>(
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
  <path d="M4 4.01c5.333 5.323 10.667 5.32 16 -.01" />
    </svg>
  )
);

WashDryHangOutlineLogo.displayName = "WashDryHangOutlineLogo";

export const WashDryHangOutlineLogoMetadata = {
  id: "wash-dry-hang-outline",
  baseId: "wash-dry-hang-outline",
  variant: "default",
  name: "Wash Dry Hang Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default WashDryHangOutlineLogo;
