/**
 * Auto-generated logo component: Brand Google One Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandGoogleOneOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandGoogleOneOutlineLogo = React.forwardRef<SVGSVGElement, BrandGoogleOneOutlineLogoProps>(
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
      <path d="M11 5v13.982a2 2 0 0 0 4 0v-13.982a2 2 0 1 0 -4 0" />
  <path d="M6.63 8.407a2.125 2.125 0 0 0 -.074 2.944c.77 .834 2.051 .869 2.862 .077l4.95 -4.834c.812 -.792 .846 -2.11 .076 -2.945a1.984 1.984 0 0 0 -2.861 -.077l-4.953 4.835" />
    </svg>
  )
);

BrandGoogleOneOutlineLogo.displayName = "BrandGoogleOneOutlineLogo";

export const BrandGoogleOneOutlineLogoMetadata = {
  id: "brand-google-one-outline",
  baseId: "brand-google-one-outline",
  variant: "default",
  name: "Brand Google One Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandGoogleOneOutlineLogo;
