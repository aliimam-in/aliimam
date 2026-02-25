/**
 * Auto-generated logo component: Arrow Up To Arc Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowUpToArcOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowUpToArcOutlineLogo = React.forwardRef<SVGSVGElement, ArrowUpToArcOutlineLogoProps>(
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
      <path d="M12 21v-12" />
  <path d="M8 13l4 -4l4 4" />
  <path d="M21 12a9 9 0 0 0 -18 0" />
    </svg>
  )
);

ArrowUpToArcOutlineLogo.displayName = "ArrowUpToArcOutlineLogo";

export const ArrowUpToArcOutlineLogoMetadata = {
  id: "arrow-up-to-arc-outline",
  baseId: "arrow-up-to-arc-outline",
  variant: "default",
  name: "Arrow Up To Arc Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowUpToArcOutlineLogo;
