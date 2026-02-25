/**
 * Auto-generated logo component: Brand Codepen Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandCodepenOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandCodepenOutlineLogo = React.forwardRef<SVGSVGElement, BrandCodepenOutlineLogoProps>(
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
      <path d="M3 15l9 6l9 -6l-9 -6l-9 6" />
  <path d="M3 9l9 6l9 -6l-9 -6l-9 6" />
  <path d="M3 9l0 6" />
  <path d="M21 9l0 6" />
  <path d="M12 3l0 6" />
  <path d="M12 15l0 6" />
    </svg>
  )
);

BrandCodepenOutlineLogo.displayName = "BrandCodepenOutlineLogo";

export const BrandCodepenOutlineLogoMetadata = {
  id: "brand-codepen-outline",
  baseId: "brand-codepen-outline",
  variant: "default",
  name: "Brand Codepen Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandCodepenOutlineLogo;
