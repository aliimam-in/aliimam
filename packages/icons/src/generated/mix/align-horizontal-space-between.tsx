/**
 * Auto-generated logo component: Align Horizontal Space Between (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AlignHorizontalSpaceBetweenLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AlignHorizontalSpaceBetweenLogo = React.forwardRef<SVGSVGElement, AlignHorizontalSpaceBetweenLogoProps>(
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
      <rect width="6" height="14" x="3" y="5" rx="2" />
  <rect width="6" height="10" x="15" y="7" rx="2" />
  <path d="M3 2v20" />
  <path d="M21 2v20" />
    </svg>
  )
);

AlignHorizontalSpaceBetweenLogo.displayName = "AlignHorizontalSpaceBetweenLogo";

export const AlignHorizontalSpaceBetweenLogoMetadata = {
  id: "align-horizontal-space-between",
  baseId: "align-horizontal-space-between",
  variant: "default",
  name: "Align Horizontal Space Between",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AlignHorizontalSpaceBetweenLogo;
