/**
 * Auto-generated logo component: Swipe Down Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SwipeDownOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SwipeDownOutlineLogo = React.forwardRef<SVGSVGElement, SwipeDownOutlineLogoProps>(
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
      <path d="M12 4a4 4 0 1 1 0 8a4 4 0 0 1 0 -8" />
  <path d="M12 12v8" />
  <path d="M9 17l3 3l3 -3" />
    </svg>
  )
);

SwipeDownOutlineLogo.displayName = "SwipeDownOutlineLogo";

export const SwipeDownOutlineLogoMetadata = {
  id: "swipe-down-outline",
  baseId: "swipe-down-outline",
  variant: "default",
  name: "Swipe Down Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SwipeDownOutlineLogo;
