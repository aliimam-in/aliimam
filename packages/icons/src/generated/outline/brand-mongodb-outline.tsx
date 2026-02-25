/**
 * Auto-generated logo component: Brand Mongodb Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandMongodbOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandMongodbOutlineLogo = React.forwardRef<SVGSVGElement, BrandMongodbOutlineLogoProps>(
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
      <path d="M12 3v19" />
  <path d="M18 11.227c0 3.273 -1.812 4.77 -6 9.273c-4.188 -4.503 -6 -6 -6 -9.273c0 -4.454 3.071 -6.927 6 -9.227c2.929 2.3 6 4.773 6 9.227" />
    </svg>
  )
);

BrandMongodbOutlineLogo.displayName = "BrandMongodbOutlineLogo";

export const BrandMongodbOutlineLogoMetadata = {
  id: "brand-mongodb-outline",
  baseId: "brand-mongodb-outline",
  variant: "default",
  name: "Brand Mongodb Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandMongodbOutlineLogo;
