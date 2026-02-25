/**
 * Auto-generated logo component: Arrow Down Rhombus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowDownRhombusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowDownRhombusOutlineLogo = React.forwardRef<SVGSVGElement, ArrowDownRhombusOutlineLogoProps>(
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
      <path d="M12 8v13" />
  <path d="M15 18l-3 3l-3 -3" />
  <path d="M14.5 5.5l-2.5 -2.5l-2.5 2.5l2.5 2.5l2.5 -2.5" />
    </svg>
  )
);

ArrowDownRhombusOutlineLogo.displayName = "ArrowDownRhombusOutlineLogo";

export const ArrowDownRhombusOutlineLogoMetadata = {
  id: "arrow-down-rhombus-outline",
  baseId: "arrow-down-rhombus-outline",
  variant: "default",
  name: "Arrow Down Rhombus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowDownRhombusOutlineLogo;
