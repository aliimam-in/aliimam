/**
 * Auto-generated logo component: Brand Stackoverflow Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandStackoverflowOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandStackoverflowOutlineLogo = React.forwardRef<SVGSVGElement, BrandStackoverflowOutlineLogoProps>(
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
      <path d="M4 17v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-1" />
  <path d="M8 16h8" />
  <path d="M8.322 12.582l7.956 .836" />
  <path d="M8.787 9.168l7.826 1.664" />
  <path d="M10.096 5.764l7.608 2.472" />
    </svg>
  )
);

BrandStackoverflowOutlineLogo.displayName = "BrandStackoverflowOutlineLogo";

export const BrandStackoverflowOutlineLogoMetadata = {
  id: "brand-stackoverflow-outline",
  baseId: "brand-stackoverflow-outline",
  variant: "default",
  name: "Brand Stackoverflow Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandStackoverflowOutlineLogo;
