/**
 * Auto-generated logo component: Align Box Right Top Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AlignBoxRightTopOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AlignBoxRightTopOutlineLogo = React.forwardRef<SVGSVGElement, AlignBoxRightTopOutlineLogoProps>(
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
      <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14" />
  <path d="M15 13h2" />
  <path d="M11 10h6" />
  <path d="M13 7h4" />
    </svg>
  )
);

AlignBoxRightTopOutlineLogo.displayName = "AlignBoxRightTopOutlineLogo";

export const AlignBoxRightTopOutlineLogoMetadata = {
  id: "align-box-right-top-outline",
  baseId: "align-box-right-top-outline",
  variant: "default",
  name: "Align Box Right Top Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AlignBoxRightTopOutlineLogo;
