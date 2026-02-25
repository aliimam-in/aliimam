/**
 * Auto-generated logo component: Arrows Down Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowsDownOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowsDownOutlineLogo = React.forwardRef<SVGSVGElement, ArrowsDownOutlineLogoProps>(
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
      <path d="M7 21l0 -18" />
  <path d="M20 18l-3 3l-3 -3" />
  <path d="M4 18l3 3l3 -3" />
  <path d="M17 21l0 -18" />
    </svg>
  )
);

ArrowsDownOutlineLogo.displayName = "ArrowsDownOutlineLogo";

export const ArrowsDownOutlineLogoMetadata = {
  id: "arrows-down-outline",
  baseId: "arrows-down-outline",
  variant: "default",
  name: "Arrows Down Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowsDownOutlineLogo;
