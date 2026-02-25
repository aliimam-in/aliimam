/**
 * Auto-generated logo component: Brand Amigo Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandAmigoOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandAmigoOutlineLogo = React.forwardRef<SVGSVGElement, BrandAmigoOutlineLogoProps>(
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
      <path d="M10 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M9.591 3.635l-7.13 14.082c-1.712 3.38 1.759 5.45 3.69 3.573l1.86 -1.81c3.142 -3.054 4.959 -2.99 8.039 .11l1.329 1.337c2.372 2.387 5.865 .078 4.176 -3.225l-7.195 -14.067c-1.114 -2.18 -3.666 -2.18 -4.77 0" />
    </svg>
  )
);

BrandAmigoOutlineLogo.displayName = "BrandAmigoOutlineLogo";

export const BrandAmigoOutlineLogoMetadata = {
  id: "brand-amigo-outline",
  baseId: "brand-amigo-outline",
  variant: "default",
  name: "Brand Amigo Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandAmigoOutlineLogo;
