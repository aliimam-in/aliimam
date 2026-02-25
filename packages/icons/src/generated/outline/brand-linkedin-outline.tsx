/**
 * Auto-generated logo component: Brand Linkedin Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandLinkedinOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandLinkedinOutlineLogo = React.forwardRef<SVGSVGElement, BrandLinkedinOutlineLogoProps>(
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
      <path d="M8 11v5" />
  <path d="M8 8v.01" />
  <path d="M12 16v-5" />
  <path d="M16 16v-3a2 2 0 1 0 -4 0" />
  <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4l0 -10" />
    </svg>
  )
);

BrandLinkedinOutlineLogo.displayName = "BrandLinkedinOutlineLogo";

export const BrandLinkedinOutlineLogoMetadata = {
  id: "brand-linkedin-outline",
  baseId: "brand-linkedin-outline",
  variant: "default",
  name: "Brand Linkedin Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandLinkedinOutlineLogo;
