/**
 * Auto-generated logo component: Arrows Cross Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowsCrossOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowsCrossOutlineLogo = React.forwardRef<SVGSVGElement, ArrowsCrossOutlineLogoProps>(
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
      <path d="M16 4h4v4" />
  <path d="M15 9l5 -5" />
  <path d="M4 20l5 -5" />
  <path d="M16 20h4v-4" />
  <path d="M4 4l16 16" />
    </svg>
  )
);

ArrowsCrossOutlineLogo.displayName = "ArrowsCrossOutlineLogo";

export const ArrowsCrossOutlineLogoMetadata = {
  id: "arrows-cross-outline",
  baseId: "arrows-cross-outline",
  variant: "default",
  name: "Arrows Cross Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowsCrossOutlineLogo;
