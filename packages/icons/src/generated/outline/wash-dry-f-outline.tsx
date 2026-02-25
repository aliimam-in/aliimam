/**
 * Auto-generated logo component: Wash Dry F Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface WashDryFOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const WashDryFOutlineLogo = React.forwardRef<SVGSVGElement, WashDryFOutlineLogoProps>(
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
  <path d="M10 16v-8h4" />
  <path d="M13 12h-3" />
    </svg>
  )
);

WashDryFOutlineLogo.displayName = "WashDryFOutlineLogo";

export const WashDryFOutlineLogoMetadata = {
  id: "wash-dry-f-outline",
  baseId: "wash-dry-f-outline",
  variant: "default",
  name: "Wash Dry F Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default WashDryFOutlineLogo;
