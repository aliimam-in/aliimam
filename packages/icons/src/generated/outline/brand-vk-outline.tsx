/**
 * Auto-generated logo component: Brand Vk Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandVkOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandVkOutlineLogo = React.forwardRef<SVGSVGElement, BrandVkOutlineLogoProps>(
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
      <path d="M14 19h-4a8 8 0 0 1 -8 -8v-5h4v5a4 4 0 0 0 4 4v-9h4v4.5l.03 0a4.531 4.531 0 0 0 3.97 -4.496h4l-.342 1.711a6.858 6.858 0 0 1 -3.658 4.789a5.34 5.34 0 0 1 3.566 4.111l.434 2.389h-4a4.531 4.531 0 0 0 -3.97 -4.496v4.5l-.03 -.008" />
    </svg>
  )
);

BrandVkOutlineLogo.displayName = "BrandVkOutlineLogo";

export const BrandVkOutlineLogoMetadata = {
  id: "brand-vk-outline",
  baseId: "brand-vk-outline",
  variant: "default",
  name: "Brand Vk Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandVkOutlineLogo;
