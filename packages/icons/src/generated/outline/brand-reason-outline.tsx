/**
 * Auto-generated logo component: Brand Reason Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandReasonOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandReasonOutlineLogo = React.forwardRef<SVGSVGElement, BrandReasonOutlineLogoProps>(
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
      <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14" />
  <path d="M18 18h-3v-6h3" />
  <path d="M18 15h-3" />
  <path d="M8 18v-6h2.5a1.5 1.5 0 0 1 0 3h-2.5" />
  <path d="M12 18l-2 -3" />
    </svg>
  )
);

BrandReasonOutlineLogo.displayName = "BrandReasonOutlineLogo";

export const BrandReasonOutlineLogoMetadata = {
  id: "brand-reason-outline",
  baseId: "brand-reason-outline",
  variant: "default",
  name: "Brand Reason Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandReasonOutlineLogo;
