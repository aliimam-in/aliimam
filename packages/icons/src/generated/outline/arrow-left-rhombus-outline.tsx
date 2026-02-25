/**
 * Auto-generated logo component: Arrow Left Rhombus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowLeftRhombusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowLeftRhombusOutlineLogo = React.forwardRef<SVGSVGElement, ArrowLeftRhombusOutlineLogoProps>(
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
      <path d="M16 12h-13" />
  <path d="M6 9l-3 3l3 3" />
  <path d="M18.5 9.5l2.5 2.5l-2.5 2.5l-2.5 -2.5l2.5 -2.5" />
    </svg>
  )
);

ArrowLeftRhombusOutlineLogo.displayName = "ArrowLeftRhombusOutlineLogo";

export const ArrowLeftRhombusOutlineLogoMetadata = {
  id: "arrow-left-rhombus-outline",
  baseId: "arrow-left-rhombus-outline",
  variant: "default",
  name: "Arrow Left Rhombus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowLeftRhombusOutlineLogo;
