/**
 * Auto-generated logo component: Brand Deviantart Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandDeviantartOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandDeviantartOutlineLogo = React.forwardRef<SVGSVGElement, BrandDeviantartOutlineLogoProps>(
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
      <path d="M18 3v4l-3.857 6h3.857v4h-6.429l-2.571 4h-3v-4l3.857 -6h-3.857v-4h6.429l2.571 -4l3 0" />
    </svg>
  )
);

BrandDeviantartOutlineLogo.displayName = "BrandDeviantartOutlineLogo";

export const BrandDeviantartOutlineLogoMetadata = {
  id: "brand-deviantart-outline",
  baseId: "brand-deviantart-outline",
  variant: "default",
  name: "Brand Deviantart Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandDeviantartOutlineLogo;
