/**
 * Auto-generated logo component: Transition Right Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TransitionRightOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TransitionRightOutlineLogo = React.forwardRef<SVGSVGElement, TransitionRightOutlineLogoProps>(
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
      <path d="M18 3a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3" />
  <path d="M3 18v-12a3 3 0 1 1 6 0v12a3 3 0 0 1 -6 0" />
  <path d="M9 12h8" />
  <path d="M14 15l3 -3l-3 -3" />
    </svg>
  )
);

TransitionRightOutlineLogo.displayName = "TransitionRightOutlineLogo";

export const TransitionRightOutlineLogoMetadata = {
  id: "transition-right-outline",
  baseId: "transition-right-outline",
  variant: "default",
  name: "Transition Right Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TransitionRightOutlineLogo;
