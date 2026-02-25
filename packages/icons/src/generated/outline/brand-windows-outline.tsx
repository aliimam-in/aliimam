/**
 * Auto-generated logo component: Brand Windows Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandWindowsOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandWindowsOutlineLogo = React.forwardRef<SVGSVGElement, BrandWindowsOutlineLogoProps>(
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
      <path d="M17.8 20l-12 -1.5c-1 -.1 -1.8 -.9 -1.8 -1.9v-9.2c0 -1 .8 -1.8 1.8 -1.9l12 -1.5c1.2 -.1 2.2 .8 2.2 1.9v12.1c0 1.2 -1.1 2.1 -2.2 1.9l0 .1" />
  <path d="M12 5l0 14" />
  <path d="M4 12l16 0" />
    </svg>
  )
);

BrandWindowsOutlineLogo.displayName = "BrandWindowsOutlineLogo";

export const BrandWindowsOutlineLogoMetadata = {
  id: "brand-windows-outline",
  baseId: "brand-windows-outline",
  variant: "default",
  name: "Brand Windows Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandWindowsOutlineLogo;
