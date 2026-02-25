/**
 * Auto-generated logo component: Arrow Ramp Right Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowRampRightOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowRampRightOutlineLogo = React.forwardRef<SVGSVGElement, ArrowRampRightOutlineLogoProps>(
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
      <path d="M7 3l0 8.707" />
  <path d="M11 7l-4 -4l-4 4" />
  <path d="M17 14l4 -4l-4 -4" />
  <path d="M7 21a11 11 0 0 1 11 -11h3" />
    </svg>
  )
);

ArrowRampRightOutlineLogo.displayName = "ArrowRampRightOutlineLogo";

export const ArrowRampRightOutlineLogoMetadata = {
  id: "arrow-ramp-right-outline",
  baseId: "arrow-ramp-right-outline",
  variant: "default",
  name: "Arrow Ramp Right Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowRampRightOutlineLogo;
