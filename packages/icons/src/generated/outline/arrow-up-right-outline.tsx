/**
 * Auto-generated logo component: Arrow Up Right Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowUpRightOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowUpRightOutlineLogo = React.forwardRef<SVGSVGElement, ArrowUpRightOutlineLogoProps>(
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
      <path d="M17 7l-10 10" />
  <path d="M8 7l9 0l0 9" />
    </svg>
  )
);

ArrowUpRightOutlineLogo.displayName = "ArrowUpRightOutlineLogo";

export const ArrowUpRightOutlineLogoMetadata = {
  id: "arrow-up-right-outline",
  baseId: "arrow-up-right-outline",
  variant: "default",
  name: "Arrow Up Right Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowUpRightOutlineLogo;
