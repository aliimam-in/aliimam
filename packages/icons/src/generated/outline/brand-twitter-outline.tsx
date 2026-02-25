/**
 * Auto-generated logo component: Brand Twitter Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandTwitterOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandTwitterOutlineLogo = React.forwardRef<SVGSVGElement, BrandTwitterOutlineLogoProps>(
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
      <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013l0 .001" />
    </svg>
  )
);

BrandTwitterOutlineLogo.displayName = "BrandTwitterOutlineLogo";

export const BrandTwitterOutlineLogoMetadata = {
  id: "brand-twitter-outline",
  baseId: "brand-twitter-outline",
  variant: "default",
  name: "Brand Twitter Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandTwitterOutlineLogo;
