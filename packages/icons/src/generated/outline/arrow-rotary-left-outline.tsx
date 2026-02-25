/**
 * Auto-generated logo component: Arrow Rotary Left Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowRotaryLeftOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowRotaryLeftOutlineLogo = React.forwardRef<SVGSVGElement, ArrowRotaryLeftOutlineLogoProps>(
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
      <path d="M16 10a3 3 0 1 1 0 -6a3 3 0 0 1 0 6" />
  <path d="M16 10v10" />
  <path d="M13 7h-10" />
  <path d="M7 11l-4 -4l4 -4" />
    </svg>
  )
);

ArrowRotaryLeftOutlineLogo.displayName = "ArrowRotaryLeftOutlineLogo";

export const ArrowRotaryLeftOutlineLogoMetadata = {
  id: "arrow-rotary-left-outline",
  baseId: "arrow-rotary-left-outline",
  variant: "default",
  name: "Arrow Rotary Left Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowRotaryLeftOutlineLogo;
