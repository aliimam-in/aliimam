/**
 * Auto-generated logo component: Arrow Wave Left Down Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowWaveLeftDownOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowWaveLeftDownOutlineLogo = React.forwardRef<SVGSVGElement, ArrowWaveLeftDownOutlineLogoProps>(
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
      <path d="M7 14h-4v-4" />
  <path d="M21 12c-.887 1.284 -2.48 2.033 -4 2c-1.52 .033 -3.113 -.716 -4 -2s-2.48 -2.033 -4 -2c-1.52 -.033 -3 1 -4 2l-2 2" />
    </svg>
  )
);

ArrowWaveLeftDownOutlineLogo.displayName = "ArrowWaveLeftDownOutlineLogo";

export const ArrowWaveLeftDownOutlineLogoMetadata = {
  id: "arrow-wave-left-down-outline",
  baseId: "arrow-wave-left-down-outline",
  variant: "default",
  name: "Arrow Wave Left Down Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowWaveLeftDownOutlineLogo;
