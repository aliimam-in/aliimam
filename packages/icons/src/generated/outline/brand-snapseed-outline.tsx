/**
 * Auto-generated logo component: Brand Snapseed Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandSnapseedOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandSnapseedOutlineLogo = React.forwardRef<SVGSVGElement, BrandSnapseedOutlineLogoProps>(
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
      <path d="M8.152 3.115a.46 .46 0 0 0 -.609 0c-2.943 2.58 -4.529 5.441 -4.543 8.378c0 2.928 1.586 5.803 4.543 8.392a.46 .46 0 0 0 .61 0c2.957 -2.589 4.547 -5.464 4.547 -8.392c0 -2.928 -1.6 -5.799 -4.548 -8.378" />
  <path d="M8 20l12.09 -.011c.503 0 .91 -.434 .91 -.969v-6.063c0 -.535 -.407 -.968 -.91 -.968h-7.382" />
    </svg>
  )
);

BrandSnapseedOutlineLogo.displayName = "BrandSnapseedOutlineLogo";

export const BrandSnapseedOutlineLogoMetadata = {
  id: "brand-snapseed-outline",
  baseId: "brand-snapseed-outline",
  variant: "default",
  name: "Brand Snapseed Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandSnapseedOutlineLogo;
