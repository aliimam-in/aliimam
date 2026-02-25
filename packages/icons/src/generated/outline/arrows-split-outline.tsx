/**
 * Auto-generated logo component: Arrows Split Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowsSplitOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowsSplitOutlineLogo = React.forwardRef<SVGSVGElement, ArrowsSplitOutlineLogoProps>(
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
      <path d="M21 17h-8l-3.5 -5h-6.5" />
  <path d="M21 7h-8l-3.495 5" />
  <path d="M18 10l3 -3l-3 -3" />
  <path d="M18 20l3 -3l-3 -3" />
    </svg>
  )
);

ArrowsSplitOutlineLogo.displayName = "ArrowsSplitOutlineLogo";

export const ArrowsSplitOutlineLogoMetadata = {
  id: "arrows-split-outline",
  baseId: "arrows-split-outline",
  variant: "default",
  name: "Arrows Split Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowsSplitOutlineLogo;
