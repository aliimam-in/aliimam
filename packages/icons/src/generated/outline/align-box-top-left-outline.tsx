/**
 * Auto-generated logo component: Align Box Top Left Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AlignBoxTopLeftOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AlignBoxTopLeftOutlineLogo = React.forwardRef<SVGSVGElement, AlignBoxTopLeftOutlineLogoProps>(
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
  <path d="M7 9v-2" />
  <path d="M10 13v-6" />
  <path d="M13 11v-4" />
    </svg>
  )
);

AlignBoxTopLeftOutlineLogo.displayName = "AlignBoxTopLeftOutlineLogo";

export const AlignBoxTopLeftOutlineLogoMetadata = {
  id: "align-box-top-left-outline",
  baseId: "align-box-top-left-outline",
  variant: "default",
  name: "Align Box Top Left Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AlignBoxTopLeftOutlineLogo;
