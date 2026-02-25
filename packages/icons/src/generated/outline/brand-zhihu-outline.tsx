/**
 * Auto-generated logo component: Brand Zhihu Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandZhihuOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandZhihuOutlineLogo = React.forwardRef<SVGSVGElement, BrandZhihuOutlineLogoProps>(
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
      <path d="M14 6h6v12h-2l-2 2l-1 -2h-1l0 -12" />
  <path d="M4 12h6.5" />
  <path d="M10.5 6h-5" />
  <path d="M6 4c-.5 2.5 -1.5 3.5 -2.5 4.5" />
  <path d="M8 6v7c0 4.5 -2 5.5 -4 7" />
  <path d="M11 18l-3 -5" />
    </svg>
  )
);

BrandZhihuOutlineLogo.displayName = "BrandZhihuOutlineLogo";

export const BrandZhihuOutlineLogoMetadata = {
  id: "brand-zhihu-outline",
  baseId: "brand-zhihu-outline",
  variant: "default",
  name: "Brand Zhihu Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandZhihuOutlineLogo;
