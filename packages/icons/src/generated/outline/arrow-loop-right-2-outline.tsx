/**
 * Auto-generated logo component: Arrow Loop Right 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowLoopRight2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowLoopRight2OutlineLogo = React.forwardRef<SVGSVGElement, ArrowLoopRight2OutlineLogoProps>(
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
      <path d="M12 21v-6m0 -6v-1a4 4 0 1 0 -4 4h13" />
  <path d="M17 16l4 -4l-4 -4" />
    </svg>
  )
);

ArrowLoopRight2OutlineLogo.displayName = "ArrowLoopRight2OutlineLogo";

export const ArrowLoopRight2OutlineLogoMetadata = {
  id: "arrow-loop-right-2-outline",
  baseId: "arrow-loop-right-2-outline",
  variant: "default",
  name: "Arrow Loop Right 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowLoopRight2OutlineLogo;
