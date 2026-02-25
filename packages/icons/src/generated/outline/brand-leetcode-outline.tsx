/**
 * Auto-generated logo component: Brand Leetcode Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandLeetcodeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandLeetcodeOutlineLogo = React.forwardRef<SVGSVGElement, BrandLeetcodeOutlineLogoProps>(
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
      <path d="M12 13h7.5" />
  <path d="M9.424 7.268l4.999 -4.999" />
  <path d="M16.633 16.644l-2.402 2.415a3.189 3.189 0 0 1 -4.524 0l-3.77 -3.787a3.223 3.223 0 0 1 0 -4.544l3.77 -3.787a3.189 3.189 0 0 1 4.524 0l2.302 2.313" />
    </svg>
  )
);

BrandLeetcodeOutlineLogo.displayName = "BrandLeetcodeOutlineLogo";

export const BrandLeetcodeOutlineLogoMetadata = {
  id: "brand-leetcode-outline",
  baseId: "brand-leetcode-outline",
  variant: "default",
  name: "Brand Leetcode Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandLeetcodeOutlineLogo;
