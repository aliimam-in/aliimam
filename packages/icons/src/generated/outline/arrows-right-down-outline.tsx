/**
 * Auto-generated logo component: Arrows Right Down Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowsRightDownOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowsRightDownOutlineLogo = React.forwardRef<SVGSVGElement, ArrowsRightDownOutlineLogoProps>(
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
      <path d="M3 17l4 4l4 -4" />
  <path d="M7 21v-11a3 3 0 0 1 3 -3h11" />
  <path d="M17 11l4 -4l-4 -4" />
    </svg>
  )
);

ArrowsRightDownOutlineLogo.displayName = "ArrowsRightDownOutlineLogo";

export const ArrowsRightDownOutlineLogoMetadata = {
  id: "arrows-right-down-outline",
  baseId: "arrows-right-down-outline",
  variant: "default",
  name: "Arrows Right Down Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowsRightDownOutlineLogo;
