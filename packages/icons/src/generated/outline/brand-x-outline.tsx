/**
 * Auto-generated logo component: Brand X Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandXOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandXOutlineLogo = React.forwardRef<SVGSVGElement, BrandXOutlineLogoProps>(
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
      <path d="M4 4l11.733 16h4.267l-11.733 -16l-4.267 0" />
  <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
    </svg>
  )
);

BrandXOutlineLogo.displayName = "BrandXOutlineLogo";

export const BrandXOutlineLogoMetadata = {
  id: "brand-x-outline",
  baseId: "brand-x-outline",
  variant: "default",
  name: "Brand X Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandXOutlineLogo;
