/**
 * Auto-generated logo component: Brand Alpine Js Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandAlpineJsOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandAlpineJsOutlineLogo = React.forwardRef<SVGSVGElement, BrandAlpineJsOutlineLogoProps>(
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
      <path d="M3 11.5l4.5 4.5h9l-9 -9l-4.5 4.5" />
  <path d="M16.5 16l4.5 -4.5l-4.5 -4.5l-4.5 4.5" />
    </svg>
  )
);

BrandAlpineJsOutlineLogo.displayName = "BrandAlpineJsOutlineLogo";

export const BrandAlpineJsOutlineLogoMetadata = {
  id: "brand-alpine-js-outline",
  baseId: "brand-alpine-js-outline",
  variant: "default",
  name: "Brand Alpine Js Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandAlpineJsOutlineLogo;
