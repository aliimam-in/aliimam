/**
 * Auto-generated logo component: Align Box Left Stretch Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AlignBoxLeftStretchOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AlignBoxLeftStretchOutlineLogo = React.forwardRef<SVGSVGElement, AlignBoxLeftStretchOutlineLogoProps>(
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
  <path d="M9 17h-2" />
  <path d="M13 12h-6" />
  <path d="M11 7h-4" />
    </svg>
  )
);

AlignBoxLeftStretchOutlineLogo.displayName = "AlignBoxLeftStretchOutlineLogo";

export const AlignBoxLeftStretchOutlineLogoMetadata = {
  id: "align-box-left-stretch-outline",
  baseId: "align-box-left-stretch-outline",
  variant: "default",
  name: "Align Box Left Stretch Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AlignBoxLeftStretchOutlineLogo;
