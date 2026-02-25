/**
 * Auto-generated logo component: Arrow Narrow Up Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowNarrowUpOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowNarrowUpOutlineLogo = React.forwardRef<SVGSVGElement, ArrowNarrowUpOutlineLogoProps>(
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
      <path d="M12 5l0 14" />
  <path d="M16 9l-4 -4" />
  <path d="M8 9l4 -4" />
    </svg>
  )
);

ArrowNarrowUpOutlineLogo.displayName = "ArrowNarrowUpOutlineLogo";

export const ArrowNarrowUpOutlineLogoMetadata = {
  id: "arrow-narrow-up-outline",
  baseId: "arrow-narrow-up-outline",
  variant: "default",
  name: "Arrow Narrow Up Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowNarrowUpOutlineLogo;
