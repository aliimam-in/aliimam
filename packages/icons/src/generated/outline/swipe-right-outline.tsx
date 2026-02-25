/**
 * Auto-generated logo component: Swipe Right Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SwipeRightOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SwipeRightOutlineLogo = React.forwardRef<SVGSVGElement, SwipeRightOutlineLogoProps>(
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
      <path d="M4 12a4 4 0 1 1 8 0a4 4 0 0 1 -8 0" />
  <path d="M12 12h8" />
  <path d="M17 15l3 -3l-3 -3" />
    </svg>
  )
);

SwipeRightOutlineLogo.displayName = "SwipeRightOutlineLogo";

export const SwipeRightOutlineLogoMetadata = {
  id: "swipe-right-outline",
  baseId: "swipe-right-outline",
  variant: "default",
  name: "Swipe Right Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SwipeRightOutlineLogo;
