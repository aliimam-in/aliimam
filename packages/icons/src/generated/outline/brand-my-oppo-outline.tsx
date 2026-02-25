/**
 * Auto-generated logo component: Brand My Oppo Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandMyOppoOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandMyOppoOutlineLogo = React.forwardRef<SVGSVGElement, BrandMyOppoOutlineLogoProps>(
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
      <path d="M18.316 5h-12.632l-3.418 4.019a1.089 1.089 0 0 0 .019 1.447l9.714 10.534l9.715 -10.49a1.09 1.09 0 0 0 .024 -1.444l-3.422 -4.066" />
  <path d="M9 11l3 3l3 -3" />
    </svg>
  )
);

BrandMyOppoOutlineLogo.displayName = "BrandMyOppoOutlineLogo";

export const BrandMyOppoOutlineLogoMetadata = {
  id: "brand-my-oppo-outline",
  baseId: "brand-my-oppo-outline",
  variant: "default",
  name: "Brand My Oppo Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandMyOppoOutlineLogo;
