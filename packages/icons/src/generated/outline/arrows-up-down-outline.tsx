/**
 * Auto-generated logo component: Arrows Up Down Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowsUpDownOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowsUpDownOutlineLogo = React.forwardRef<SVGSVGElement, ArrowsUpDownOutlineLogoProps>(
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
      <path d="M7 3l0 18" />
  <path d="M10 6l-3 -3l-3 3" />
  <path d="M20 18l-3 3l-3 -3" />
  <path d="M17 21l0 -18" />
    </svg>
  )
);

ArrowsUpDownOutlineLogo.displayName = "ArrowsUpDownOutlineLogo";

export const ArrowsUpDownOutlineLogoMetadata = {
  id: "arrows-up-down-outline",
  baseId: "arrows-up-down-outline",
  variant: "default",
  name: "Arrows Up Down Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowsUpDownOutlineLogo;
