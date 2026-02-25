/**
 * Auto-generated logo component: Brand Cpp Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandCppOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandCppOutlineLogo = React.forwardRef<SVGSVGElement, BrandCppOutlineLogoProps>(
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
      <path d="M18 12h4" />
  <path d="M20 10v4" />
  <path d="M11 12h4" />
  <path d="M13 10v4" />
  <path d="M9 9a3 3 0 0 0 -3 -3h-.5a3.5 3.5 0 0 0 -3.5 3.5v5a3.5 3.5 0 0 0 3.5 3.5h.5a3 3 0 0 0 3 -3" />
    </svg>
  )
);

BrandCppOutlineLogo.displayName = "BrandCppOutlineLogo";

export const BrandCppOutlineLogoMetadata = {
  id: "brand-cpp-outline",
  baseId: "brand-cpp-outline",
  variant: "default",
  name: "Brand Cpp Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandCppOutlineLogo;
