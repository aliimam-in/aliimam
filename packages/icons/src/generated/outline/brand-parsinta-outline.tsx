/**
 * Auto-generated logo component: Brand Parsinta Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandParsintaOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandParsintaOutlineLogo = React.forwardRef<SVGSVGElement, BrandParsintaOutlineLogoProps>(
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
      <path d="M12 3a9 9 0 1 0 9 9" />
  <path d="M21 12a9 9 0 0 0 -9 -9" opacity=".5" />
  <path d="M10 9v6l5 -3l-5 -3" />
    </svg>
  )
);

BrandParsintaOutlineLogo.displayName = "BrandParsintaOutlineLogo";

export const BrandParsintaOutlineLogoMetadata = {
  id: "brand-parsinta-outline",
  baseId: "brand-parsinta-outline",
  variant: "default",
  name: "Brand Parsinta Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandParsintaOutlineLogo;
