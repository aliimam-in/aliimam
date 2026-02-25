/**
 * Auto-generated logo component: Arrows Double Se Nw Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowsDoubleSeNwOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowsDoubleSeNwOutlineLogo = React.forwardRef<SVGSVGElement, ArrowsDoubleSeNwOutlineLogoProps>(
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
      <path d="M3 10l11 11" />
  <path d="M14 17v4h-4" />
  <path d="M14 3h-4v4" />
  <path d="M21 14l-11 -11" />
    </svg>
  )
);

ArrowsDoubleSeNwOutlineLogo.displayName = "ArrowsDoubleSeNwOutlineLogo";

export const ArrowsDoubleSeNwOutlineLogoMetadata = {
  id: "arrows-double-se-nw-outline",
  baseId: "arrows-double-se-nw-outline",
  variant: "default",
  name: "Arrows Double Se Nw Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowsDoubleSeNwOutlineLogo;
