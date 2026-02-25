/**
 * Auto-generated logo component: Arrow Wave Left Up Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowWaveLeftUpOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowWaveLeftUpOutlineLogo = React.forwardRef<SVGSVGElement, ArrowWaveLeftUpOutlineLogoProps>(
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
      <path d="M7 10h-4v4" />
  <path d="M21 12c-.887 -1.285 -2.48 -2.033 -4 -2c-1.52 -.033 -3.113 .715 -4 2c-.887 1.284 -2.48 2.033 -4 2c-1.52 .033 -3 -1 -4 -2l-2 -2" />
    </svg>
  )
);

ArrowWaveLeftUpOutlineLogo.displayName = "ArrowWaveLeftUpOutlineLogo";

export const ArrowWaveLeftUpOutlineLogoMetadata = {
  id: "arrow-wave-left-up-outline",
  baseId: "arrow-wave-left-up-outline",
  variant: "default",
  name: "Arrow Wave Left Up Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowWaveLeftUpOutlineLogo;
