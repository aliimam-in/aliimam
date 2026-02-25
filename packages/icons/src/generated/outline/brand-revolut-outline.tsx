/**
 * Auto-generated logo component: Brand Revolut Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandRevolutOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandRevolutOutlineLogo = React.forwardRef<SVGSVGElement, BrandRevolutOutlineLogoProps>(
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
      <path d="M5 10h3v10h-3l0 -10" />
  <path d="M14.5 4h-9.5v3h9.4a1.5 1.5 0 0 1 0 3h-3.4v4l4 6h4l-5 -7h.5a4.5 4.5 0 1 0 0 -9" />
    </svg>
  )
);

BrandRevolutOutlineLogo.displayName = "BrandRevolutOutlineLogo";

export const BrandRevolutOutlineLogoMetadata = {
  id: "brand-revolut-outline",
  baseId: "brand-revolut-outline",
  variant: "default",
  name: "Brand Revolut Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandRevolutOutlineLogo;
