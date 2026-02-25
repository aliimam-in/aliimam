/**
 * Auto-generated logo component: Brand Adonis Js Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandAdonisJsOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandAdonisJsOutlineLogo = React.forwardRef<SVGSVGElement, BrandAdonisJsOutlineLogoProps>(
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
      <path d="M12 3c7.2 0 9 1.8 9 9c0 7.2 -1.8 9 -9 9c-7.2 0 -9 -1.8 -9 -9c0 -7.2 1.8 -9 9 -9" />
  <path d="M8.863 16.922c1.137 -.422 1.637 -.922 3.137 -.922s2 .5 3.138 .922c.713 .264 1.516 -.102 1.778 -.772c.126 -.32 .11 -.673 -.044 -.983l-3.708 -7.474c-.297 -.598 -1.058 -.859 -1.7 -.583a1.24 1.24 0 0 0 -.627 .583l-3.709 7.474c-.321 .648 -.017 1.415 .679 1.714c.332 .143 .715 .167 1.056 .04l0 .001" />
    </svg>
  )
);

BrandAdonisJsOutlineLogo.displayName = "BrandAdonisJsOutlineLogo";

export const BrandAdonisJsOutlineLogoMetadata = {
  id: "brand-adonis-js-outline",
  baseId: "brand-adonis-js-outline",
  variant: "default",
  name: "Brand Adonis Js Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandAdonisJsOutlineLogo;
