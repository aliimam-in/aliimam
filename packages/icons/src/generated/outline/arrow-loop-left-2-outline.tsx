/**
 * Auto-generated logo component: Arrow Loop Left 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowLoopLeft2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowLoopLeft2OutlineLogo = React.forwardRef<SVGSVGElement, ArrowLoopLeft2OutlineLogoProps>(
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
      <path d="M13 21v-6m0 -6v-1a4 4 0 1 1 4 4h-13" />
  <path d="M8 16l-4 -4l4 -4" />
    </svg>
  )
);

ArrowLoopLeft2OutlineLogo.displayName = "ArrowLoopLeft2OutlineLogo";

export const ArrowLoopLeft2OutlineLogoMetadata = {
  id: "arrow-loop-left-2-outline",
  baseId: "arrow-loop-left-2-outline",
  variant: "default",
  name: "Arrow Loop Left 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowLoopLeft2OutlineLogo;
