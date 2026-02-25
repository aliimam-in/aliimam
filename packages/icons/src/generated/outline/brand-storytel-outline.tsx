/**
 * Auto-generated logo component: Brand Storytel Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandStorytelOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandStorytelOutlineLogo = React.forwardRef<SVGSVGElement, BrandStorytelOutlineLogoProps>(
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
      <path d="M4.103 22c2.292 -2.933 16.825 -2.43 16.825 -11.538c0 -6.298 -4.974 -8.462 -8.451 -8.462c-3.477 0 -9.477 3.036 -9.477 11.241c0 6.374 1.103 8.759 1.103 8.759" />
    </svg>
  )
);

BrandStorytelOutlineLogo.displayName = "BrandStorytelOutlineLogo";

export const BrandStorytelOutlineLogoMetadata = {
  id: "brand-storytel-outline",
  baseId: "brand-storytel-outline",
  variant: "default",
  name: "Brand Storytel Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandStorytelOutlineLogo;
