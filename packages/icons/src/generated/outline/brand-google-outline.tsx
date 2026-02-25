/**
 * Auto-generated logo component: Brand Google Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandGoogleOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandGoogleOutlineLogo = React.forwardRef<SVGSVGElement, BrandGoogleOutlineLogoProps>(
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
      <path d="M20.945 11a9 9 0 1 1 -3.284 -5.997l-2.655 2.392a5.5 5.5 0 1 0 2.119 6.605h-4.125v-3h7.945" />
    </svg>
  )
);

BrandGoogleOutlineLogo.displayName = "BrandGoogleOutlineLogo";

export const BrandGoogleOutlineLogoMetadata = {
  id: "brand-google-outline",
  baseId: "brand-google-outline",
  variant: "default",
  name: "Brand Google Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandGoogleOutlineLogo;
