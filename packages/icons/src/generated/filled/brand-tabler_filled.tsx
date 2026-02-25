/**
 * Auto-generated logo component: Brand Tabler (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandTablerFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandTablerFilledLogo = React.forwardRef<SVGSVGElement, BrandTablerFilledLogoProps>(
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
      <path d="M17 2a5 5 0 0 1 5 5v10a5 5 0 0 1 -5 5h-10a5 5 0 0 1 -5 -5v-10a5 5 0 0 1 5 -5zm-1 12h-3a1 1 0 0 0 0 2h3a1 1 0 0 0 0 -2m-7.293 -5.707a1 1 0 0 0 -1.414 0l-.083 .094a1 1 0 0 0 .083 1.32l2.292 2.293l-2.292 2.293a1 1 0 0 0 1.414 1.414l3 -3a1 1 0 0 0 0 -1.414z" />
    </svg>
  )
);

BrandTablerFilledLogo.displayName = "BrandTablerFilledLogo";

export const BrandTablerFilledLogoMetadata = {
  id: "brand-tabler_filled",
  baseId: "brand-tabler",
  variant: "filled",
  name: "Brand Tabler",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandTablerFilledLogo;
