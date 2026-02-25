/**
 * Auto-generated logo component: Brand Php Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandPhpOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandPhpOutlineLogo = React.forwardRef<SVGSVGElement, BrandPhpOutlineLogoProps>(
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
      <path d="M2 12a10 9 0 1 0 20 0a10 9 0 1 0 -20 0" />
  <path d="M5.5 15l.395 -1.974l.605 -3.026h1.32a1 1 0 0 1 .986 1.164l-.167 1a1 1 0 0 1 -.986 .836h-1.653" />
  <path d="M15.5 15l.395 -1.974l.605 -3.026h1.32a1 1 0 0 1 .986 1.164l-.167 1a1 1 0 0 1 -.986 .836h-1.653" />
  <path d="M12 7.5l-1 5.5" />
  <path d="M11.6 10h2.4l-.5 3" />
    </svg>
  )
);

BrandPhpOutlineLogo.displayName = "BrandPhpOutlineLogo";

export const BrandPhpOutlineLogoMetadata = {
  id: "brand-php-outline",
  baseId: "brand-php-outline",
  variant: "default",
  name: "Brand Php Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandPhpOutlineLogo;
