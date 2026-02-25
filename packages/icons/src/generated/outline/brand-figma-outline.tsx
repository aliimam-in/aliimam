/**
 * Auto-generated logo component: Brand Figma Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandFigmaOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandFigmaOutlineLogo = React.forwardRef<SVGSVGElement, BrandFigmaOutlineLogoProps>(
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
      <path d="M12 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M6 6a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3a3 3 0 0 1 -3 3h-6a3 3 0 0 1 -3 -3" />
  <path d="M9 9a3 3 0 0 0 0 6h3m-3 0a3 3 0 1 0 3 3v-15" />
    </svg>
  )
);

BrandFigmaOutlineLogo.displayName = "BrandFigmaOutlineLogo";

export const BrandFigmaOutlineLogoMetadata = {
  id: "brand-figma-outline",
  baseId: "brand-figma-outline",
  variant: "default",
  name: "Brand Figma Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandFigmaOutlineLogo;
