/**
 * Auto-generated logo component: Arrow Ramp Right 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowRampRight2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowRampRight2OutlineLogo = React.forwardRef<SVGSVGElement, ArrowRampRight2OutlineLogoProps>(
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
      <path d="M6 3v8.707" />
  <path d="M16 14l4 -4l-4 -4" />
  <path d="M6 21c0 -6.075 4.925 -11 11 -11h3" />
    </svg>
  )
);

ArrowRampRight2OutlineLogo.displayName = "ArrowRampRight2OutlineLogo";

export const ArrowRampRight2OutlineLogoMetadata = {
  id: "arrow-ramp-right-2-outline",
  baseId: "arrow-ramp-right-2-outline",
  variant: "default",
  name: "Arrow Ramp Right 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowRampRight2OutlineLogo;
