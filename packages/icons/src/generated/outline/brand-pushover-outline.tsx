/**
 * Auto-generated logo component: Brand Pushover Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandPushoverOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandPushoverOutlineLogo = React.forwardRef<SVGSVGElement, BrandPushoverOutlineLogoProps>(
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
      <path d="M6.16 10.985c-.83 -1.935 1.53 -7.985 8.195 -7.985c3.333 0 4.645 1.382 4.645 3.9c0 2.597 -2.612 6.1 -9 6.1" />
  <path d="M12.5 6l-5.5 15" />
    </svg>
  )
);

BrandPushoverOutlineLogo.displayName = "BrandPushoverOutlineLogo";

export const BrandPushoverOutlineLogoMetadata = {
  id: "brand-pushover-outline",
  baseId: "brand-pushover-outline",
  variant: "default",
  name: "Brand Pushover Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandPushoverOutlineLogo;
