/**
 * Auto-generated logo component: Brand Amd Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandAmdOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandAmdOutlineLogo = React.forwardRef<SVGSVGElement, BrandAmdOutlineLogoProps>(
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
      <path d="M16 16v-7c0 -.566 -.434 -1 -1 -1h-7l-5 -5h17c.566 0 1 .434 1 1v17l-5 -5" />
  <path d="M11.293 20.707l4.707 -4.707h-7a1 1 0 0 1 -1 -1v-7l-4.707 4.707a1 1 0 0 0 -.293 .707v6.586a1 1 0 0 0 1 1h6.586a1 1 0 0 0 .707 -.293" />
    </svg>
  )
);

BrandAmdOutlineLogo.displayName = "BrandAmdOutlineLogo";

export const BrandAmdOutlineLogoMetadata = {
  id: "brand-amd-outline",
  baseId: "brand-amd-outline",
  variant: "default",
  name: "Brand Amd Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandAmdOutlineLogo;
