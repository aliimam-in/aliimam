/**
 * Auto-generated logo component: Brand Nexo Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandNexoOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandNexoOutlineLogo = React.forwardRef<SVGSVGElement, BrandNexoOutlineLogoProps>(
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
      <path d="M17 3l5 3v12l-5 3l-10 -6v-6l10 6v-6l-5 -3l5 -3" />
  <path d="M12 6l-5 -3l-5 3v12l5 3l4.7 -3.13" />
    </svg>
  )
);

BrandNexoOutlineLogo.displayName = "BrandNexoOutlineLogo";

export const BrandNexoOutlineLogoMetadata = {
  id: "brand-nexo-outline",
  baseId: "brand-nexo-outline",
  variant: "default",
  name: "Brand Nexo Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandNexoOutlineLogo;
