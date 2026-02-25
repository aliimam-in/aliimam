/**
 * Auto-generated logo component: Transition Left Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TransitionLeftOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TransitionLeftOutlineLogo = React.forwardRef<SVGSVGElement, TransitionLeftOutlineLogoProps>(
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
      <path d="M6 21a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3" />
  <path d="M21 6v12a3 3 0 0 1 -6 0v-12a3 3 0 0 1 6 0" />
  <path d="M15 12h-8" />
  <path d="M10 9l-3 3l3 3" />
    </svg>
  )
);

TransitionLeftOutlineLogo.displayName = "TransitionLeftOutlineLogo";

export const TransitionLeftOutlineLogoMetadata = {
  id: "transition-left-outline",
  baseId: "transition-left-outline",
  variant: "default",
  name: "Transition Left Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TransitionLeftOutlineLogo;
