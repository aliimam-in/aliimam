/**
 * Auto-generated logo component: Align Box Right Stretch Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AlignBoxRightStretchOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AlignBoxRightStretchOutlineLogo = React.forwardRef<SVGSVGElement, AlignBoxRightStretchOutlineLogoProps>(
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
      <path d="M15 17h2" />
  <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14" />
  <path d="M11 12h6" />
  <path d="M13 7h4" />
    </svg>
  )
);

AlignBoxRightStretchOutlineLogo.displayName = "AlignBoxRightStretchOutlineLogo";

export const AlignBoxRightStretchOutlineLogoMetadata = {
  id: "align-box-right-stretch-outline",
  baseId: "align-box-right-stretch-outline",
  variant: "default",
  name: "Align Box Right Stretch Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AlignBoxRightStretchOutlineLogo;
