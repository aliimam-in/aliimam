/**
 * Auto-generated logo component: Affiliate Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AffiliateOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AffiliateOutlineLogo = React.forwardRef<SVGSVGElement, AffiliateOutlineLogoProps>(
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
      <path d="M5.931 6.936l1.275 4.249m5.607 5.609l4.251 1.275" />
  <path d="M11.683 12.317l5.759 -5.759" />
  <path d="M4 5.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0" />
  <path d="M17 5.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0" />
  <path d="M17 18.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0" />
  <path d="M4 15.5a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0 -9 0" />
    </svg>
  )
);

AffiliateOutlineLogo.displayName = "AffiliateOutlineLogo";

export const AffiliateOutlineLogoMetadata = {
  id: "affiliate-outline",
  baseId: "affiliate-outline",
  variant: "default",
  name: "Affiliate Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AffiliateOutlineLogo;
