/**
 * Auto-generated logo component: Brand Html5 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandHtml5OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandHtml5OutlineLogo = React.forwardRef<SVGSVGElement, BrandHtml5OutlineLogoProps>(
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
      <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5l16 0" />
  <path d="M15.5 8h-7l.5 4h6l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" />
    </svg>
  )
);

BrandHtml5OutlineLogo.displayName = "BrandHtml5OutlineLogo";

export const BrandHtml5OutlineLogoMetadata = {
  id: "brand-html5-outline",
  baseId: "brand-html5-outline",
  variant: "default",
  name: "Brand Html5 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandHtml5OutlineLogo;
