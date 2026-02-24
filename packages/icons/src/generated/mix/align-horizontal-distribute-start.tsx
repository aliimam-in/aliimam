/**
 * Auto-generated logo component: Align Horizontal Distribute Start (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AlignHorizontalDistributeStartLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AlignHorizontalDistributeStartLogo = React.forwardRef<SVGSVGElement, AlignHorizontalDistributeStartLogoProps>(
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
      <rect width="6" height="14" x="4" y="5" rx="2" />
  <rect width="6" height="10" x="14" y="7" rx="2" />
  <path d="M4 2v20" />
  <path d="M14 2v20" />
    </svg>
  )
);

AlignHorizontalDistributeStartLogo.displayName = "AlignHorizontalDistributeStartLogo";

export const AlignHorizontalDistributeStartLogoMetadata = {
  id: "align-horizontal-distribute-start",
  baseId: "align-horizontal-distribute-start",
  variant: "default",
  name: "Align Horizontal Distribute Start",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AlignHorizontalDistributeStartLogo;
