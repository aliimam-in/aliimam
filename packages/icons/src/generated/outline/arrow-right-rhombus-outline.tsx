/**
 * Auto-generated logo component: Arrow Right Rhombus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowRightRhombusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowRightRhombusOutlineLogo = React.forwardRef<SVGSVGElement, ArrowRightRhombusOutlineLogoProps>(
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
      <path d="M8 12h13" />
  <path d="M18 9l3 3l-3 3" />
  <path d="M5.5 9.5l-2.5 2.5l2.5 2.5l2.5 -2.5l-2.5 -2.5" />
    </svg>
  )
);

ArrowRightRhombusOutlineLogo.displayName = "ArrowRightRhombusOutlineLogo";

export const ArrowRightRhombusOutlineLogoMetadata = {
  id: "arrow-right-rhombus-outline",
  baseId: "arrow-right-rhombus-outline",
  variant: "default",
  name: "Arrow Right Rhombus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowRightRhombusOutlineLogo;
