/**
 * Auto-generated logo component: Arrow Rotary Last Left Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowRotaryLastLeftOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowRotaryLastLeftOutlineLogo = React.forwardRef<SVGSVGElement, ArrowRotaryLastLeftOutlineLogoProps>(
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
      <path d="M15 15a3 3 0 1 1 0 -6a3 3 0 0 1 0 6" />
  <path d="M15 15v6" />
  <path d="M12.5 9.5l-6.5 -6.5" />
  <path d="M11 3h-5v5" />
    </svg>
  )
);

ArrowRotaryLastLeftOutlineLogo.displayName = "ArrowRotaryLastLeftOutlineLogo";

export const ArrowRotaryLastLeftOutlineLogoMetadata = {
  id: "arrow-rotary-last-left-outline",
  baseId: "arrow-rotary-last-left-outline",
  variant: "default",
  name: "Arrow Rotary Last Left Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowRotaryLastLeftOutlineLogo;
