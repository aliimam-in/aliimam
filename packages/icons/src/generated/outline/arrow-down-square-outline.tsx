/**
 * Auto-generated logo component: Arrow Down Square Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowDownSquareOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowDownSquareOutlineLogo = React.forwardRef<SVGSVGElement, ArrowDownSquareOutlineLogoProps>(
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
      <path d="M12 7v14" />
  <path d="M9 18l3 3l3 -3" />
  <path d="M14 3v4h-4v-4l4 0" />
    </svg>
  )
);

ArrowDownSquareOutlineLogo.displayName = "ArrowDownSquareOutlineLogo";

export const ArrowDownSquareOutlineLogoMetadata = {
  id: "arrow-down-square-outline",
  baseId: "arrow-down-square-outline",
  variant: "default",
  name: "Arrow Down Square Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowDownSquareOutlineLogo;
