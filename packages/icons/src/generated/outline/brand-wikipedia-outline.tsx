/**
 * Auto-generated logo component: Brand Wikipedia Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandWikipediaOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandWikipediaOutlineLogo = React.forwardRef<SVGSVGElement, BrandWikipediaOutlineLogoProps>(
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
      <path d="M3 4.984h2" />
  <path d="M8 4.984h2.5" />
  <path d="M14.5 4.984h2.5" />
  <path d="M22 4.984h-2" />
  <path d="M4 4.984l5.455 14.516l6.545 -14.516" />
  <path d="M9 4.984l6 14.516l6 -14.516" />
    </svg>
  )
);

BrandWikipediaOutlineLogo.displayName = "BrandWikipediaOutlineLogo";

export const BrandWikipediaOutlineLogoMetadata = {
  id: "brand-wikipedia-outline",
  baseId: "brand-wikipedia-outline",
  variant: "default",
  name: "Brand Wikipedia Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandWikipediaOutlineLogo;
