/**
 * Auto-generated logo component: Arrow Wave Right Down Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowWaveRightDownOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowWaveRightDownOutlineLogo = React.forwardRef<SVGSVGElement, ArrowWaveRightDownOutlineLogoProps>(
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
      <path d="M17 14h4v-4" />
  <path d="M3 12c.887 1.284 2.48 2.033 4 2c1.52 .033 3.113 -.716 4 -2s2.48 -2.033 4 -2c1.52 -.033 3 1 4 2l2 2" />
    </svg>
  )
);

ArrowWaveRightDownOutlineLogo.displayName = "ArrowWaveRightDownOutlineLogo";

export const ArrowWaveRightDownOutlineLogoMetadata = {
  id: "arrow-wave-right-down-outline",
  baseId: "arrow-wave-right-down-outline",
  variant: "default",
  name: "Arrow Wave Right Down Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowWaveRightDownOutlineLogo;
