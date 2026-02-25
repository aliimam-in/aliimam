/**
 * Auto-generated logo component: Brand Superhuman Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandSuperhumanOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandSuperhumanOutlineLogo = React.forwardRef<SVGSVGElement, BrandSuperhumanOutlineLogoProps>(
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
      <path d="M16 12l4 3l-8 7l-8 -7l4 -3" />
  <path d="M12 3l-8 6l8 6l8 -6l-8 -6" />
  <path d="M12 15h8" />
    </svg>
  )
);

BrandSuperhumanOutlineLogo.displayName = "BrandSuperhumanOutlineLogo";

export const BrandSuperhumanOutlineLogoMetadata = {
  id: "brand-superhuman-outline",
  baseId: "brand-superhuman-outline",
  variant: "default",
  name: "Brand Superhuman Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandSuperhumanOutlineLogo;
