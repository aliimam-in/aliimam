/**
 * Auto-generated logo component: Brand Blender Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandBlenderOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandBlenderOutlineLogo = React.forwardRef<SVGSVGElement, BrandBlenderOutlineLogoProps>(
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
      <path d="M9 14a6 5 0 1 0 12 0a6 5 0 1 0 -12 0" />
  <path d="M14 14a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M3 16l9 -6.5" />
  <path d="M6 9h9" />
  <path d="M13 5l5.65 5" />
    </svg>
  )
);

BrandBlenderOutlineLogo.displayName = "BrandBlenderOutlineLogo";

export const BrandBlenderOutlineLogoMetadata = {
  id: "brand-blender-outline",
  baseId: "brand-blender-outline",
  variant: "default",
  name: "Brand Blender Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandBlenderOutlineLogo;
