/**
 * Auto-generated logo component: Arrows Double Nw Se Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowsDoubleNwSeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowsDoubleNwSeOutlineLogo = React.forwardRef<SVGSVGElement, ArrowsDoubleNwSeOutlineLogoProps>(
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
      <path d="M14 21l-11 -11" />
  <path d="M3 14v-4h4" />
  <path d="M17 14h4v-4" />
  <path d="M10 3l11 11" />
    </svg>
  )
);

ArrowsDoubleNwSeOutlineLogo.displayName = "ArrowsDoubleNwSeOutlineLogo";

export const ArrowsDoubleNwSeOutlineLogoMetadata = {
  id: "arrows-double-nw-se-outline",
  baseId: "arrows-double-nw-se-outline",
  variant: "default",
  name: "Arrows Double Nw Se Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowsDoubleNwSeOutlineLogo;
