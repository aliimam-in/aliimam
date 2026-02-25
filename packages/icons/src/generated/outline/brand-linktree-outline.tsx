/**
 * Auto-generated logo component: Brand Linktree Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandLinktreeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandLinktreeOutlineLogo = React.forwardRef<SVGSVGElement, BrandLinktreeOutlineLogoProps>(
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
      <path d="M4 10h16" />
  <path d="M6.5 4.5l11 11" />
  <path d="M6.5 15.5l11 -11" />
  <path d="M12 10v-8" />
  <path d="M12 15v7" />
    </svg>
  )
);

BrandLinktreeOutlineLogo.displayName = "BrandLinktreeOutlineLogo";

export const BrandLinktreeOutlineLogoMetadata = {
  id: "brand-linktree-outline",
  baseId: "brand-linktree-outline",
  variant: "default",
  name: "Brand Linktree Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandLinktreeOutlineLogo;
