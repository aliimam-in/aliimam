/**
 * Auto-generated logo component: Brand Prisma Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandPrismaOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandPrismaOutlineLogo = React.forwardRef<SVGSVGElement, BrandPrismaOutlineLogoProps>(
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
      <path d="M4.186 16.202l3.615 5.313c.265 .39 .754 .57 1.215 .447l10.166 -2.718a1.086 1.086 0 0 0 .713 -1.511l-7.505 -15.483a.448 .448 0 0 0 -.787 -.033l-7.453 12.838a1.07 1.07 0 0 0 .037 1.147l-.001 0" />
  <path d="M8.5 22l3.5 -20" />
    </svg>
  )
);

BrandPrismaOutlineLogo.displayName = "BrandPrismaOutlineLogo";

export const BrandPrismaOutlineLogoMetadata = {
  id: "brand-prisma-outline",
  baseId: "brand-prisma-outline",
  variant: "default",
  name: "Brand Prisma Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandPrismaOutlineLogo;
