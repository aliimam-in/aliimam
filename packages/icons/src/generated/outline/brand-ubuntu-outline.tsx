/**
 * Auto-generated logo component: Brand Ubuntu Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandUbuntuOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandUbuntuOutlineLogo = React.forwardRef<SVGSVGElement, BrandUbuntuOutlineLogoProps>(
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
      <path d="M10 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M17.723 7.41a7.992 7.992 0 0 0 -3.74 -2.162m-3.971 0a7.993 7.993 0 0 0 -3.789 2.216m-1.881 3.215a8 8 0 0 0 -.342 2.32c0 .738 .1 1.453 .287 2.132m1.96 3.428a7.993 7.993 0 0 0 3.759 2.19m4 0a7.993 7.993 0 0 0 3.747 -2.186m1.962 -3.43a8.008 8.008 0 0 0 .287 -2.131c0 -.764 -.107 -1.503 -.307 -2.203" />
  <path d="M3 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M17 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    </svg>
  )
);

BrandUbuntuOutlineLogo.displayName = "BrandUbuntuOutlineLogo";

export const BrandUbuntuOutlineLogoMetadata = {
  id: "brand-ubuntu-outline",
  baseId: "brand-ubuntu-outline",
  variant: "default",
  name: "Brand Ubuntu Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandUbuntuOutlineLogo;
