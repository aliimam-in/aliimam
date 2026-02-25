/**
 * Auto-generated logo component: Arrow Down Narrow Wide (default)
 * Category: arrows
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowDownNarrowWideLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowDownNarrowWideLogo = React.forwardRef<SVGSVGElement, ArrowDownNarrowWideLogoProps>(
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
      <path d="m3 16 4 4 4-4" />
  <path d="M7 20V4" />
  <path d="M11 4h4" />
  <path d="M11 8h7" />
  <path d="M11 12h10" />
    </svg>
  )
);

ArrowDownNarrowWideLogo.displayName = "ArrowDownNarrowWideLogo";

export const ArrowDownNarrowWideLogoMetadata = {
  id: "arrow-down-narrow-wide",
  baseId: "arrow-down-narrow-wide",
  variant: "default",
  name: "Arrow Down Narrow Wide",
  category: "arrows",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowDownNarrowWideLogo;
