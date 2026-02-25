/**
 * Auto-generated logo component: Arrow Bar To Left Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowBarToLeftOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowBarToLeftOutlineLogo = React.forwardRef<SVGSVGElement, ArrowBarToLeftOutlineLogoProps>(
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
      <path d="M10 12l10 0" />
  <path d="M10 12l4 4" />
  <path d="M10 12l4 -4" />
  <path d="M4 4l0 16" />
    </svg>
  )
);

ArrowBarToLeftOutlineLogo.displayName = "ArrowBarToLeftOutlineLogo";

export const ArrowBarToLeftOutlineLogoMetadata = {
  id: "arrow-bar-to-left-outline",
  baseId: "arrow-bar-to-left-outline",
  variant: "default",
  name: "Arrow Bar To Left Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowBarToLeftOutlineLogo;
