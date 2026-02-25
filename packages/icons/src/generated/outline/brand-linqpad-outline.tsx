/**
 * Auto-generated logo component: Brand Linqpad Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandLinqpadOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandLinqpadOutlineLogo = React.forwardRef<SVGSVGElement, BrandLinqpadOutlineLogoProps>(
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
      <path d="M5 21h3.5l2.5 -6l2.5 -1l2.5 7h4l1 -4.5l-2 -1l-7 -12l-6 -.5l1.5 4l2.5 .5l1 2.5l-7 8l1 3" />
    </svg>
  )
);

BrandLinqpadOutlineLogo.displayName = "BrandLinqpadOutlineLogo";

export const BrandLinqpadOutlineLogoMetadata = {
  id: "brand-linqpad-outline",
  baseId: "brand-linqpad-outline",
  variant: "default",
  name: "Brand Linqpad Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandLinqpadOutlineLogo;
