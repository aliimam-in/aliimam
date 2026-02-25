/**
 * Auto-generated logo component: Brand Notion Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandNotionOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandNotionOutlineLogo = React.forwardRef<SVGSVGElement, BrandNotionOutlineLogoProps>(
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
      <path d="M11 17.5v-6.5h.5l4 6h.5v-6.5" />
  <path d="M19.077 20.071l-11.53 .887a1 1 0 0 1 -.876 -.397l-2.471 -3.294a1 1 0 0 1 -.2 -.6v-10.741a1 1 0 0 1 .923 -.997l11.389 -.876a2 2 0 0 1 1.262 .33l1.535 1.023a2 2 0 0 1 .891 1.664v12.004a1 1 0 0 1 -.923 .997" />
  <path d="M4.5 5.5l2.5 2.5" />
  <path d="M20 7l-13 1v12.5" />
    </svg>
  )
);

BrandNotionOutlineLogo.displayName = "BrandNotionOutlineLogo";

export const BrandNotionOutlineLogoMetadata = {
  id: "brand-notion-outline",
  baseId: "brand-notion-outline",
  variant: "default",
  name: "Brand Notion Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandNotionOutlineLogo;
