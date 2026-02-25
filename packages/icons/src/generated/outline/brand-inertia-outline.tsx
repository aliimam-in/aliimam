/**
 * Auto-generated logo component: Brand Inertia Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandInertiaOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandInertiaOutlineLogo = React.forwardRef<SVGSVGElement, BrandInertiaOutlineLogoProps>(
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
      <path d="M12.5 8l4 4l-4 4h4.5l4 -4l-4 -4l-4.5 0" />
  <path d="M3.5 8l4 4l-4 4h4.5l4 -4l-4 -4l-4.5 0" />
    </svg>
  )
);

BrandInertiaOutlineLogo.displayName = "BrandInertiaOutlineLogo";

export const BrandInertiaOutlineLogoMetadata = {
  id: "brand-inertia-outline",
  baseId: "brand-inertia-outline",
  variant: "default",
  name: "Brand Inertia Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandInertiaOutlineLogo;
