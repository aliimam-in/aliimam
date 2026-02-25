/**
 * Auto-generated logo component: Brand Messenger Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandMessengerOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandMessengerOutlineLogo = React.forwardRef<SVGSVGElement, BrandMessengerOutlineLogoProps>(
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
      <path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1" />
  <path d="M8 13l3 -2l2 2l3 -2" />
    </svg>
  )
);

BrandMessengerOutlineLogo.displayName = "BrandMessengerOutlineLogo";

export const BrandMessengerOutlineLogoMetadata = {
  id: "brand-messenger-outline",
  baseId: "brand-messenger-outline",
  variant: "default",
  name: "Brand Messenger Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandMessengerOutlineLogo;
