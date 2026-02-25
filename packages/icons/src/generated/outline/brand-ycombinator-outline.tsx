/**
 * Auto-generated logo component: Brand Ycombinator Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandYcombinatorOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandYcombinatorOutlineLogo = React.forwardRef<SVGSVGElement, BrandYcombinatorOutlineLogoProps>(
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
      <path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -12" />
  <path d="M8 7l4 6l4 -6" />
  <path d="M12 17l0 -4" />
    </svg>
  )
);

BrandYcombinatorOutlineLogo.displayName = "BrandYcombinatorOutlineLogo";

export const BrandYcombinatorOutlineLogoMetadata = {
  id: "brand-ycombinator-outline",
  baseId: "brand-ycombinator-outline",
  variant: "default",
  name: "Brand Ycombinator Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandYcombinatorOutlineLogo;
