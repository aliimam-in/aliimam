/**
 * Auto-generated logo component: Swipe Right (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SwipeRightFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SwipeRightFilledLogo = React.forwardRef<SVGSVGElement, SwipeRightFilledLogoProps>(
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
      <path d="M8 7a5 5 0 0 1 4.9 4h4.685l-1.292 -1.293a1 1 0 0 1 -.083 -1.32l.083 -.094a1 1 0 0 1 1.414 0l3 3q .054 .053 .097 .112l.071 .11l.054 .114l.035 .105l.03 .148l.006 .118l-.003 .075l-.017 .126l-.03 .111l-.044 .111l-.052 .098l-.074 .104l-.073 .082l-3 3a1 1 0 0 1 -1.414 -1.414l1.291 -1.293l-4.684 .001a5.002 5.002 0 0 1 -9.9 -1.001a5 5 0 0 1 5 -5" />
    </svg>
  )
);

SwipeRightFilledLogo.displayName = "SwipeRightFilledLogo";

export const SwipeRightFilledLogoMetadata = {
  id: "swipe-right_filled",
  baseId: "swipe-right",
  variant: "filled",
  name: "Swipe Right",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SwipeRightFilledLogo;
