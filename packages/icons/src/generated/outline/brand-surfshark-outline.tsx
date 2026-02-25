/**
 * Auto-generated logo component: Brand Surfshark Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandSurfsharkOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandSurfsharkOutlineLogo = React.forwardRef<SVGSVGElement, BrandSurfsharkOutlineLogoProps>(
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
      <path d="M19.954 9.447c-.237 -6.217 0 -6.217 -6 -6.425c-5.774 -.208 -6.824 1 -7.91 5.382c-2.884 11.816 -3.845 14.716 4.792 11.198c9.392 -3.831 9.297 -5.382 9.114 -10.155l.004 0" />
  <path d="M8 16h.452c1.943 .007 3.526 -1.461 3.543 -3.286v-2.428c.018 -1.828 1.607 -3.298 3.553 -3.286h.452" />
    </svg>
  )
);

BrandSurfsharkOutlineLogo.displayName = "BrandSurfsharkOutlineLogo";

export const BrandSurfsharkOutlineLogoMetadata = {
  id: "brand-surfshark-outline",
  baseId: "brand-surfshark-outline",
  variant: "default",
  name: "Brand Surfshark Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandSurfsharkOutlineLogo;
