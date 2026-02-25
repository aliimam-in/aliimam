/**
 * Auto-generated logo component: Arrow Up Square Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowUpSquareOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowUpSquareOutlineLogo = React.forwardRef<SVGSVGElement, ArrowUpSquareOutlineLogoProps>(
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
      <path d="M12 17l0 -14" />
  <path d="M15 6l-3 -3l-3 3" />
  <path d="M10 21v-4h4v4l-4 0" />
    </svg>
  )
);

ArrowUpSquareOutlineLogo.displayName = "ArrowUpSquareOutlineLogo";

export const ArrowUpSquareOutlineLogoMetadata = {
  id: "arrow-up-square-outline",
  baseId: "arrow-up-square-outline",
  variant: "default",
  name: "Arrow Up Square Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowUpSquareOutlineLogo;
