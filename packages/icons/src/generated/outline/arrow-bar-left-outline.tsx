/**
 * Auto-generated logo component: Arrow Bar Left Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowBarLeftOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowBarLeftOutlineLogo = React.forwardRef<SVGSVGElement, ArrowBarLeftOutlineLogoProps>(
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
      <path d="M4 12l10 0" />
  <path d="M4 12l4 4" />
  <path d="M4 12l4 -4" />
  <path d="M20 4l0 16" />
    </svg>
  )
);

ArrowBarLeftOutlineLogo.displayName = "ArrowBarLeftOutlineLogo";

export const ArrowBarLeftOutlineLogoMetadata = {
  id: "arrow-bar-left-outline",
  baseId: "arrow-bar-left-outline",
  variant: "default",
  name: "Arrow Bar Left Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowBarLeftOutlineLogo;
