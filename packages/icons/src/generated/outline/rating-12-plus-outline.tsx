/**
 * Auto-generated logo component: Rating 12 Plus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Rating12PlusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Rating12PlusOutlineLogo = React.forwardRef<SVGSVGElement, Rating12PlusOutlineLogoProps>(
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
  <path d="M7 15v-6" />
  <path d="M15.5 12h3" />
  <path d="M17 10.5v3" />
  <path d="M10 10.5a1.5 1.5 0 0 1 3 0c0 .443 -.313 .989 -.612 1.393l-2.388 3.107h3" />
    </svg>
  )
);

Rating12PlusOutlineLogo.displayName = "Rating12PlusOutlineLogo";

export const Rating12PlusOutlineLogoMetadata = {
  id: "rating-12-plus-outline",
  baseId: "rating-12-plus-outline",
  variant: "default",
  name: "Rating 12 Plus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Rating12PlusOutlineLogo;
