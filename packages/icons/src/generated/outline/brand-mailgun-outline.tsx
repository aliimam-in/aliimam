/**
 * Auto-generated logo component: Brand Mailgun Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandMailgunOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandMailgunOutlineLogo = React.forwardRef<SVGSVGElement, BrandMailgunOutlineLogoProps>(
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
      <path d="M17 12a2 2 0 1 0 4 0a9 9 0 1 0 -2.987 6.697" />
  <path d="M7 12a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
  <path d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    </svg>
  )
);

BrandMailgunOutlineLogo.displayName = "BrandMailgunOutlineLogo";

export const BrandMailgunOutlineLogoMetadata = {
  id: "brand-mailgun-outline",
  baseId: "brand-mailgun-outline",
  variant: "default",
  name: "Brand Mailgun Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandMailgunOutlineLogo;
