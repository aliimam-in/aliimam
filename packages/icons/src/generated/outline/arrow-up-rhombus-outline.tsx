/**
 * Auto-generated logo component: Arrow Up Rhombus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowUpRhombusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowUpRhombusOutlineLogo = React.forwardRef<SVGSVGElement, ArrowUpRhombusOutlineLogoProps>(
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
      <path d="M12 16v-13" />
  <path d="M15 6l-3 -3l-3 3" />
  <path d="M14.5 18.5l-2.5 2.5l-2.5 -2.5l2.5 -2.5l2.5 2.5" />
    </svg>
  )
);

ArrowUpRhombusOutlineLogo.displayName = "ArrowUpRhombusOutlineLogo";

export const ArrowUpRhombusOutlineLogoMetadata = {
  id: "arrow-up-rhombus-outline",
  baseId: "arrow-up-rhombus-outline",
  variant: "default",
  name: "Arrow Up Rhombus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowUpRhombusOutlineLogo;
