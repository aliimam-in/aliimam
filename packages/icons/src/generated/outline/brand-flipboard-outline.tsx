/**
 * Auto-generated logo component: Brand Flipboard Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandFlipboardOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandFlipboardOutlineLogo = React.forwardRef<SVGSVGElement, BrandFlipboardOutlineLogoProps>(
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
      <path d="M3.973 3h16.054c.537 0 .973 .436 .973 .973v4.052a.973 .973 0 0 1 -.973 .973h-5.025v4.831c0 .648 -.525 1.173 -1.173 1.173h-4.829v5.025a.973 .973 0 0 1 -.974 .973h-4.053a.973 .973 0 0 1 -.973 -.973v-16.054c0 -.537 .436 -.973 .973 -.973" />
    </svg>
  )
);

BrandFlipboardOutlineLogo.displayName = "BrandFlipboardOutlineLogo";

export const BrandFlipboardOutlineLogoMetadata = {
  id: "brand-flipboard-outline",
  baseId: "brand-flipboard-outline",
  variant: "default",
  name: "Brand Flipboard Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandFlipboardOutlineLogo;
