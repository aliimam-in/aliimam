/**
 * Auto-generated logo component: Arrow Rotary Last Right Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowRotaryLastRightOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowRotaryLastRightOutlineLogo = React.forwardRef<SVGSVGElement, ArrowRotaryLastRightOutlineLogoProps>(
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
      <path d="M6 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M9 15v6" />
  <path d="M11.5 9.5l6.5 -6.5" />
  <path d="M13 3h5v5" />
    </svg>
  )
);

ArrowRotaryLastRightOutlineLogo.displayName = "ArrowRotaryLastRightOutlineLogo";

export const ArrowRotaryLastRightOutlineLogoMetadata = {
  id: "arrow-rotary-last-right-outline",
  baseId: "arrow-rotary-last-right-outline",
  variant: "default",
  name: "Arrow Rotary Last Right Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowRotaryLastRightOutlineLogo;
