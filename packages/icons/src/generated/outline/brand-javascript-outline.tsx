/**
 * Auto-generated logo component: Brand Javascript Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandJavascriptOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandJavascriptOutlineLogo = React.forwardRef<SVGSVGElement, BrandJavascriptOutlineLogoProps>(
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
  <path d="M7.5 8h3v8l-2 -1" />
  <path d="M16.5 8h-2.5a.5 .5 0 0 0 -.5 .5v3a.5 .5 0 0 0 .5 .5h1.423a.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5" />
    </svg>
  )
);

BrandJavascriptOutlineLogo.displayName = "BrandJavascriptOutlineLogo";

export const BrandJavascriptOutlineLogoMetadata = {
  id: "brand-javascript-outline",
  baseId: "brand-javascript-outline",
  variant: "default",
  name: "Brand Javascript Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandJavascriptOutlineLogo;
