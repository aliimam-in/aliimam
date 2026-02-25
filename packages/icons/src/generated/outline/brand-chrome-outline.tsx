/**
 * Auto-generated logo component: Brand Chrome Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandChromeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandChromeOutlineLogo = React.forwardRef<SVGSVGElement, BrandChromeOutlineLogoProps>(
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
  <path d="M9 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M12 9h8.4" />
  <path d="M14.598 13.5l-4.2 7.275" />
  <path d="M9.402 13.5l-4.2 -7.275" />
    </svg>
  )
);

BrandChromeOutlineLogo.displayName = "BrandChromeOutlineLogo";

export const BrandChromeOutlineLogoMetadata = {
  id: "brand-chrome-outline",
  baseId: "brand-chrome-outline",
  variant: "default",
  name: "Brand Chrome Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandChromeOutlineLogo;
