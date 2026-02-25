/**
 * Auto-generated logo component: Brand Onedrive Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandOnedriveOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandOnedriveOutlineLogo = React.forwardRef<SVGSVGElement, BrandOnedriveOutlineLogoProps>(
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
      <path d="M18.456 10.45a6.45 6.45 0 0 0 -12 -2.151a4.857 4.857 0 0 0 -4.44 5.241a4.856 4.856 0 0 0 5.236 4.444h10.751a3.771 3.771 0 0 0 3.99 -3.54a3.772 3.772 0 0 0 -3.538 -3.992l.001 -.002" />
    </svg>
  )
);

BrandOnedriveOutlineLogo.displayName = "BrandOnedriveOutlineLogo";

export const BrandOnedriveOutlineLogoMetadata = {
  id: "brand-onedrive-outline",
  baseId: "brand-onedrive-outline",
  variant: "default",
  name: "Brand Onedrive Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandOnedriveOutlineLogo;
