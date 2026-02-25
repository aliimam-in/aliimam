/**
 * Auto-generated logo component: Arrows Double Sw Ne Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowsDoubleSwNeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowsDoubleSwNeOutlineLogo = React.forwardRef<SVGSVGElement, ArrowsDoubleSwNeOutlineLogoProps>(
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
      <path d="M14 3l-11 11" />
  <path d="M3 10v4h4" />
  <path d="M17 10h4v4" />
  <path d="M10 21l11 -11" />
    </svg>
  )
);

ArrowsDoubleSwNeOutlineLogo.displayName = "ArrowsDoubleSwNeOutlineLogo";

export const ArrowsDoubleSwNeOutlineLogoMetadata = {
  id: "arrows-double-sw-ne-outline",
  baseId: "arrows-double-sw-ne-outline",
  variant: "default",
  name: "Arrows Double Sw Ne Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowsDoubleSwNeOutlineLogo;
