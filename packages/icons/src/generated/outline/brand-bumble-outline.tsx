/**
 * Auto-generated logo component: Brand Bumble Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandBumbleOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandBumbleOutlineLogo = React.forwardRef<SVGSVGElement, BrandBumbleOutlineLogoProps>(
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
      <path d="M7 12h10" />
  <path d="M9 8h6" />
  <path d="M10 16h4" />
  <path d="M16.268 3h-8.536a1.46 1.46 0 0 0 -1.268 .748l-4.268 7.509a1.507 1.507 0 0 0 0 1.486l4.268 7.509c.26 .462 .744 .747 1.268 .748h8.536a1.46 1.46 0 0 0 1.268 -.748l4.268 -7.509a1.507 1.507 0 0 0 0 -1.486l-4.268 -7.509a1.46 1.46 0 0 0 -1.268 -.748" />
    </svg>
  )
);

BrandBumbleOutlineLogo.displayName = "BrandBumbleOutlineLogo";

export const BrandBumbleOutlineLogoMetadata = {
  id: "brand-bumble-outline",
  baseId: "brand-bumble-outline",
  variant: "default",
  name: "Brand Bumble Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandBumbleOutlineLogo;
