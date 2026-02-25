/**
 * Auto-generated logo component: Brand Socket Io Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandSocketIoOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandSocketIoOutlineLogo = React.forwardRef<SVGSVGElement, BrandSocketIoOutlineLogoProps>(
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
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
  <path d="M11 11h1l3 -4l-4 4" />
  <path d="M12 13h1l-4 4l3 -4" />
    </svg>
  )
);

BrandSocketIoOutlineLogo.displayName = "BrandSocketIoOutlineLogo";

export const BrandSocketIoOutlineLogoMetadata = {
  id: "brand-socket-io-outline",
  baseId: "brand-socket-io-outline",
  variant: "default",
  name: "Brand Socket Io Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandSocketIoOutlineLogo;
