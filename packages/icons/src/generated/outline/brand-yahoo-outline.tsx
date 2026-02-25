/**
 * Auto-generated logo component: Brand Yahoo Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandYahooOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandYahooOutlineLogo = React.forwardRef<SVGSVGElement, BrandYahooOutlineLogoProps>(
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
      <path d="M3 6l5 0" />
  <path d="M7 18l7 0" />
  <path d="M4.5 6l5.5 7v5" />
  <path d="M10 13l6 -5" />
  <path d="M12.5 8l5 0" />
  <path d="M20 11l0 4" />
  <path d="M20 18l0 .01" />
    </svg>
  )
);

BrandYahooOutlineLogo.displayName = "BrandYahooOutlineLogo";

export const BrandYahooOutlineLogoMetadata = {
  id: "brand-yahoo-outline",
  baseId: "brand-yahoo-outline",
  variant: "default",
  name: "Brand Yahoo Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandYahooOutlineLogo;
