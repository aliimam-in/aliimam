/**
 * Auto-generated logo component: Wash Dry Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface WashDryOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const WashDryOffOutlineLogo = React.forwardRef<SVGSVGElement, WashDryOffOutlineLogoProps>(
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
      <path d="M20.116 20.127a2.99 2.99 0 0 1 -2.116 .873h-12a3 3 0 0 1 -3 -3v-12c0 -.827 .335 -1.576 .877 -2.12m3.123 -.88h11a3 3 0 0 1 3 3v11" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

WashDryOffOutlineLogo.displayName = "WashDryOffOutlineLogo";

export const WashDryOffOutlineLogoMetadata = {
  id: "wash-dry-off-outline",
  baseId: "wash-dry-off-outline",
  variant: "default",
  name: "Wash Dry Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default WashDryOffOutlineLogo;
