/**
 * Auto-generated logo component: Arrow Rotary First Right Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowRotaryFirstRightOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowRotaryFirstRightOutlineLogo = React.forwardRef<SVGSVGElement, ArrowRotaryFirstRightOutlineLogoProps>(
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
  <path d="M10.5 9.5l8.5 8.5" />
  <path d="M14 18h5v-5" />
    </svg>
  )
);

ArrowRotaryFirstRightOutlineLogo.displayName = "ArrowRotaryFirstRightOutlineLogo";

export const ArrowRotaryFirstRightOutlineLogoMetadata = {
  id: "arrow-rotary-first-right-outline",
  baseId: "arrow-rotary-first-right-outline",
  variant: "default",
  name: "Arrow Rotary First Right Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowRotaryFirstRightOutlineLogo;
