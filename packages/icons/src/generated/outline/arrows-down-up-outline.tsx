/**
 * Auto-generated logo component: Arrows Down Up Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowsDownUpOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowsDownUpOutlineLogo = React.forwardRef<SVGSVGElement, ArrowsDownUpOutlineLogoProps>(
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
  <path d="M10 18l-3 3l-3 -3" />
  <path d="M7 21l0 -18" />
  <path d="M20 6l-3 -3l-3 3" />
    </svg>
  )
);

ArrowsDownUpOutlineLogo.displayName = "ArrowsDownUpOutlineLogo";

export const ArrowsDownUpOutlineLogoMetadata = {
  id: "arrows-down-up-outline",
  baseId: "arrows-down-up-outline",
  variant: "default",
  name: "Arrows Down Up Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowsDownUpOutlineLogo;
