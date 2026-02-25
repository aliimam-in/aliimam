/**
 * Auto-generated logo component: Arrow Ramp Left 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowRampLeft2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowRampLeft2OutlineLogo = React.forwardRef<SVGSVGElement, ArrowRampLeft2OutlineLogoProps>(
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
      <path d="M18 3v8.707" />
  <path d="M8 14l-4 -4l4 -4" />
  <path d="M18 21c0 -6.075 -4.925 -11 -11 -11h-3" />
    </svg>
  )
);

ArrowRampLeft2OutlineLogo.displayName = "ArrowRampLeft2OutlineLogo";

export const ArrowRampLeft2OutlineLogoMetadata = {
  id: "arrow-ramp-left-2-outline",
  baseId: "arrow-ramp-left-2-outline",
  variant: "default",
  name: "Arrow Ramp Left 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowRampLeft2OutlineLogo;
