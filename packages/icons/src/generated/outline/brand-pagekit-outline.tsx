/**
 * Auto-generated logo component: Brand Pagekit Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandPagekitOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandPagekitOutlineLogo = React.forwardRef<SVGSVGElement, BrandPagekitOutlineLogoProps>(
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
      <path d="M12.077 20h-5.077v-16h11v14h-5.077" />
    </svg>
  )
);

BrandPagekitOutlineLogo.displayName = "BrandPagekitOutlineLogo";

export const BrandPagekitOutlineLogoMetadata = {
  id: "brand-pagekit-outline",
  baseId: "brand-pagekit-outline",
  variant: "default",
  name: "Brand Pagekit Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandPagekitOutlineLogo;
