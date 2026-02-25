/**
 * Auto-generated logo component: Brand Alipay Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandAlipayOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandAlipayOutlineLogo = React.forwardRef<SVGSVGElement, BrandAlipayOutlineLogoProps>(
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
      <path d="M19 3h-14a2 2 0 0 0 -2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2v-14a2 2 0 0 0 -2 -2" />
  <path d="M7 7h10" />
  <path d="M12 3v7" />
  <path d="M21 17.314c-2.971 -1.923 -15 -8.779 -15 -1.864c0 1.716 1.52 2.55 2.985 2.55c3.512 0 6.814 -5.425 6.814 -8h-6.604" />
    </svg>
  )
);

BrandAlipayOutlineLogo.displayName = "BrandAlipayOutlineLogo";

export const BrandAlipayOutlineLogoMetadata = {
  id: "brand-alipay-outline",
  baseId: "brand-alipay-outline",
  variant: "default",
  name: "Brand Alipay Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandAlipayOutlineLogo;
