/**
 * Auto-generated logo component: Arrows Up Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowsUpOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowsUpOutlineLogo = React.forwardRef<SVGSVGElement, ArrowsUpOutlineLogoProps>(
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
      <path d="M17 3l0 18" />
  <path d="M4 6l3 -3l3 3" />
  <path d="M20 6l-3 -3l-3 3" />
  <path d="M7 3l0 18" />
    </svg>
  )
);

ArrowsUpOutlineLogo.displayName = "ArrowsUpOutlineLogo";

export const ArrowsUpOutlineLogoMetadata = {
  id: "arrows-up-outline",
  baseId: "arrows-up-outline",
  variant: "default",
  name: "Arrows Up Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowsUpOutlineLogo;
