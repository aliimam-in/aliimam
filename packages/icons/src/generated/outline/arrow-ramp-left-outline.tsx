/**
 * Auto-generated logo component: Arrow Ramp Left Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowRampLeftOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowRampLeftOutlineLogo = React.forwardRef<SVGSVGElement, ArrowRampLeftOutlineLogoProps>(
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
      <path d="M17 3l0 8.707" />
  <path d="M13 7l4 -4l4 4" />
  <path d="M7 14l-4 -4l4 -4" />
  <path d="M17 21a11 11 0 0 0 -11 -11h-3" />
    </svg>
  )
);

ArrowRampLeftOutlineLogo.displayName = "ArrowRampLeftOutlineLogo";

export const ArrowRampLeftOutlineLogoMetadata = {
  id: "arrow-ramp-left-outline",
  baseId: "arrow-ramp-left-outline",
  variant: "default",
  name: "Arrow Ramp Left Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowRampLeftOutlineLogo;
