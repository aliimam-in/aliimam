/**
 * Auto-generated logo component: Brand Upwork Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandUpworkOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandUpworkOutlineLogo = React.forwardRef<SVGSVGElement, BrandUpworkOutlineLogoProps>(
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
      <path d="M3 7v5a3 3 0 0 0 6 0v-5h1l4 6c.824 1.319 1.945 2 3.5 2a3.5 3.5 0 0 0 0 -7c-2.027 0 -3.137 1 -3.5 3c-.242 1.33 -.908 4 -2 8" />
    </svg>
  )
);

BrandUpworkOutlineLogo.displayName = "BrandUpworkOutlineLogo";

export const BrandUpworkOutlineLogoMetadata = {
  id: "brand-upwork-outline",
  baseId: "brand-upwork-outline",
  variant: "default",
  name: "Brand Upwork Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandUpworkOutlineLogo;
