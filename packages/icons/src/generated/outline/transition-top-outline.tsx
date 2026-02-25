/**
 * Auto-generated logo component: Transition Top Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TransitionTopOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TransitionTopOutlineLogo = React.forwardRef<SVGSVGElement, TransitionTopOutlineLogoProps>(
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
      <path d="M21 6a3 3 0 0 0 -3 -3h-12a3 3 0 0 0 -3 3" />
  <path d="M6 21h12a3 3 0 0 0 0 -6h-12a3 3 0 0 0 0 6" />
  <path d="M12 15v-8" />
  <path d="M9 10l3 -3l3 3" />
    </svg>
  )
);

TransitionTopOutlineLogo.displayName = "TransitionTopOutlineLogo";

export const TransitionTopOutlineLogoMetadata = {
  id: "transition-top-outline",
  baseId: "transition-top-outline",
  variant: "default",
  name: "Transition Top Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TransitionTopOutlineLogo;
