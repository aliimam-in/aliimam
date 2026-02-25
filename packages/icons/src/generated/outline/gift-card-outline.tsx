/**
 * Auto-generated logo component: Gift Card Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GiftCardOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GiftCardOutlineLogo = React.forwardRef<SVGSVGElement, GiftCardOutlineLogoProps>(
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
      <path d="M3 8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3l0 -8" />
  <path d="M7 16l3 -3l3 3" />
  <path d="M8 13c-.789 0 -2 -.672 -2 -1.5s.711 -1.5 1.5 -1.5c1.128 -.02 2.077 1.17 2.5 3c.423 -1.83 1.372 -3.02 2.5 -3c.789 0 1.5 .672 1.5 1.5s-1.211 1.5 -2 1.5h-4" />
    </svg>
  )
);

GiftCardOutlineLogo.displayName = "GiftCardOutlineLogo";

export const GiftCardOutlineLogoMetadata = {
  id: "gift-card-outline",
  baseId: "gift-card-outline",
  variant: "default",
  name: "Gift Card Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GiftCardOutlineLogo;
