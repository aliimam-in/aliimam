/**
 * Auto-generated logo component: Brand Peanut Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandPeanutOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandPeanutOutlineLogo = React.forwardRef<SVGSVGElement, BrandPeanutOutlineLogoProps>(
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
      <path d="M15 16.25l-.816 -.36l-.462 -.196c-1.444 -.592 -2 -.593 -3.447 0l-.462 .195l-.817 .359a4.5 4.5 0 1 1 0 -8.49l1.054 .462l.434 .178c1.292 .507 1.863 .48 3.237 -.082l.462 -.195l.817 -.359a4.5 4.5 0 1 1 0 8.49" />
    </svg>
  )
);

BrandPeanutOutlineLogo.displayName = "BrandPeanutOutlineLogo";

export const BrandPeanutOutlineLogoMetadata = {
  id: "brand-peanut-outline",
  baseId: "brand-peanut-outline",
  variant: "default",
  name: "Brand Peanut Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandPeanutOutlineLogo;
