/**
 * Auto-generated logo component: Arrows Left Down Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowsLeftDownOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowsLeftDownOutlineLogo = React.forwardRef<SVGSVGElement, ArrowsLeftDownOutlineLogoProps>(
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
      <path d="M7 3l-4 4l4 4" />
  <path d="M3 7h11a3 3 0 0 1 3 3v11" />
  <path d="M13 17l4 4l4 -4" />
    </svg>
  )
);

ArrowsLeftDownOutlineLogo.displayName = "ArrowsLeftDownOutlineLogo";

export const ArrowsLeftDownOutlineLogoMetadata = {
  id: "arrows-left-down-outline",
  baseId: "arrows-left-down-outline",
  variant: "default",
  name: "Arrows Left Down Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowsLeftDownOutlineLogo;
