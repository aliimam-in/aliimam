/**
 * Auto-generated logo component: Swipe Up Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SwipeUpOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SwipeUpOutlineLogo = React.forwardRef<SVGSVGElement, SwipeUpOutlineLogoProps>(
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
      <path d="M8 16a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
  <path d="M12 12v-8" />
  <path d="M9 7l3 -3l3 3" />
    </svg>
  )
);

SwipeUpOutlineLogo.displayName = "SwipeUpOutlineLogo";

export const SwipeUpOutlineLogoMetadata = {
  id: "swipe-up-outline",
  baseId: "swipe-up-outline",
  variant: "default",
  name: "Swipe Up Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SwipeUpOutlineLogo;
