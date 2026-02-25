/**
 * Auto-generated logo component: Transition Bottom Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TransitionBottomOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TransitionBottomOutlineLogo = React.forwardRef<SVGSVGElement, TransitionBottomOutlineLogoProps>(
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
      <path d="M21 18a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3" />
  <path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3" />
  <path d="M12 9v8" />
  <path d="M9 14l3 3l3 -3" />
    </svg>
  )
);

TransitionBottomOutlineLogo.displayName = "TransitionBottomOutlineLogo";

export const TransitionBottomOutlineLogoMetadata = {
  id: "transition-bottom-outline",
  baseId: "transition-bottom-outline",
  variant: "default",
  name: "Transition Bottom Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TransitionBottomOutlineLogo;
