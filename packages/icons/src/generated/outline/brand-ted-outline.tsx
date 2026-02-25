/**
 * Auto-generated logo component: Brand Ted Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandTedOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandTedOutlineLogo = React.forwardRef<SVGSVGElement, BrandTedOutlineLogoProps>(
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
      <path d="M2 8h4" />
  <path d="M4 8v8" />
  <path d="M13 8h-4v8h4" />
  <path d="M9 12h2.5" />
  <path d="M16 8v8h2a3 3 0 0 0 3 -3v-2a3 3 0 0 0 -3 -3h-2" />
    </svg>
  )
);

BrandTedOutlineLogo.displayName = "BrandTedOutlineLogo";

export const BrandTedOutlineLogoMetadata = {
  id: "brand-ted-outline",
  baseId: "brand-ted-outline",
  variant: "default",
  name: "Brand Ted Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandTedOutlineLogo;
