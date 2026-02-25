/**
 * Auto-generated logo component: Brand Office Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandOfficeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandOfficeOutlineLogo = React.forwardRef<SVGSVGElement, BrandOfficeOutlineLogoProps>(
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
      <path d="M4 18h9v-12l-5 2v5l-4 2v-8l9 -4l7 2v13l-7 3l-9 -3" />
    </svg>
  )
);

BrandOfficeOutlineLogo.displayName = "BrandOfficeOutlineLogo";

export const BrandOfficeOutlineLogoMetadata = {
  id: "brand-office-outline",
  baseId: "brand-office-outline",
  variant: "default",
  name: "Brand Office Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandOfficeOutlineLogo;
