/**
 * Auto-generated logo component: Arrow Up Narrow Wide (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowUpNarrowWideLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowUpNarrowWideLogo = React.forwardRef<SVGSVGElement, ArrowUpNarrowWideLogoProps>(
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
      <path d="m3 8 4-4 4 4" />
  <path d="M7 4v16" />
  <path d="M11 12h4" />
  <path d="M11 16h7" />
  <path d="M11 20h10" />
    </svg>
  )
);

ArrowUpNarrowWideLogo.displayName = "ArrowUpNarrowWideLogo";

export const ArrowUpNarrowWideLogoMetadata = {
  id: "arrow-up-narrow-wide",
  baseId: "arrow-up-narrow-wide",
  variant: "default",
  name: "Arrow Up Narrow Wide",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowUpNarrowWideLogo;
