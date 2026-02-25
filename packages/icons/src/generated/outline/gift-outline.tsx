/**
 * Auto-generated logo component: Gift Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GiftOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GiftOutlineLogo = React.forwardRef<SVGSVGElement, GiftOutlineLogoProps>(
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
      <path d="M3 9a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1l0 -2" />
  <path d="M12 8l0 13" />
  <path d="M19 12v7a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-7" />
  <path d="M7.5 8a2.5 2.5 0 0 1 0 -5a4.8 8 0 0 1 4.5 5a4.8 8 0 0 1 4.5 -5a2.5 2.5 0 0 1 0 5" />
    </svg>
  )
);

GiftOutlineLogo.displayName = "GiftOutlineLogo";

export const GiftOutlineLogoMetadata = {
  id: "gift-outline",
  baseId: "gift-outline",
  variant: "default",
  name: "Gift Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GiftOutlineLogo;
