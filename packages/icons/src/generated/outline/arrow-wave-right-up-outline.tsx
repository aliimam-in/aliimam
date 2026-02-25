/**
 * Auto-generated logo component: Arrow Wave Right Up Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowWaveRightUpOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowWaveRightUpOutlineLogo = React.forwardRef<SVGSVGElement, ArrowWaveRightUpOutlineLogoProps>(
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
      <path d="M17 10h4v4" />
  <path d="M3 12c.887 -1.284 2.48 -2.033 4 -2c1.52 -.033 3.113 .716 4 2s2.48 2.033 4 2c1.52 .033 3 -1 4 -2l2 -2" />
    </svg>
  )
);

ArrowWaveRightUpOutlineLogo.displayName = "ArrowWaveRightUpOutlineLogo";

export const ArrowWaveRightUpOutlineLogoMetadata = {
  id: "arrow-wave-right-up-outline",
  baseId: "arrow-wave-right-up-outline",
  variant: "default",
  name: "Arrow Wave Right Up Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowWaveRightUpOutlineLogo;
