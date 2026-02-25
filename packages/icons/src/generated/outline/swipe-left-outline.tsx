/**
 * Auto-generated logo component: Swipe Left Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SwipeLeftOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SwipeLeftOutlineLogo = React.forwardRef<SVGSVGElement, SwipeLeftOutlineLogoProps>(
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
      <path d="M20 12a4 4 0 1 0 -8 0a4 4 0 0 0 8 0" />
  <path d="M12 12h-8" />
  <path d="M7 15l-3 -3l3 -3" />
    </svg>
  )
);

SwipeLeftOutlineLogo.displayName = "SwipeLeftOutlineLogo";

export const SwipeLeftOutlineLogoMetadata = {
  id: "swipe-left-outline",
  baseId: "swipe-left-outline",
  variant: "default",
  name: "Swipe Left Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SwipeLeftOutlineLogo;
