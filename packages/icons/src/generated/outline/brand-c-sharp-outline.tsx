/**
 * Auto-generated logo component: Brand C Sharp Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandCSharpOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandCSharpOutlineLogo = React.forwardRef<SVGSVGElement, BrandCSharpOutlineLogoProps>(
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
      <path d="M10 9a3 3 0 0 0 -3 -3h-.5a3.5 3.5 0 0 0 -3.5 3.5v5a3.5 3.5 0 0 0 3.5 3.5h.5a3 3 0 0 0 3 -3" />
  <path d="M16 7l-1 10" />
  <path d="M20 7l-1 10" />
  <path d="M14 10h7.5" />
  <path d="M21 14h-7.5" />
    </svg>
  )
);

BrandCSharpOutlineLogo.displayName = "BrandCSharpOutlineLogo";

export const BrandCSharpOutlineLogoMetadata = {
  id: "brand-c-sharp-outline",
  baseId: "brand-c-sharp-outline",
  variant: "default",
  name: "Brand C Sharp Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandCSharpOutlineLogo;
