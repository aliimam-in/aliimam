/**
 * Auto-generated logo component: Arrow Narrow Up Dashed Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowNarrowUpDashedOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowNarrowUpDashedOutlineLogo = React.forwardRef<SVGSVGElement, ArrowNarrowUpDashedOutlineLogoProps>(
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
      <path d="M12 5v6m0 3v1.5m0 3v.5" />
  <path d="M16 9l-4 -4" />
  <path d="M8 9l4 -4" />
    </svg>
  )
);

ArrowNarrowUpDashedOutlineLogo.displayName = "ArrowNarrowUpDashedOutlineLogo";

export const ArrowNarrowUpDashedOutlineLogoMetadata = {
  id: "arrow-narrow-up-dashed-outline",
  baseId: "arrow-narrow-up-dashed-outline",
  variant: "default",
  name: "Arrow Narrow Up Dashed Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowNarrowUpDashedOutlineLogo;
