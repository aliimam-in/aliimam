/**
 * Auto-generated logo component: Arrow Rotary Right Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowRotaryRightOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowRotaryRightOutlineLogo = React.forwardRef<SVGSVGElement, ArrowRotaryRightOutlineLogoProps>(
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
      <path d="M5 7a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M8 10v10" />
  <path d="M17 11l4 -4l-4 -4" />
  <path d="M11 7h10" />
    </svg>
  )
);

ArrowRotaryRightOutlineLogo.displayName = "ArrowRotaryRightOutlineLogo";

export const ArrowRotaryRightOutlineLogoMetadata = {
  id: "arrow-rotary-right-outline",
  baseId: "arrow-rotary-right-outline",
  variant: "default",
  name: "Arrow Rotary Right Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowRotaryRightOutlineLogo;
