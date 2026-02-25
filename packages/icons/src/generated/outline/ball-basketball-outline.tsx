/**
 * Auto-generated logo component: Ball Basketball Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BallBasketballOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BallBasketballOutlineLogo = React.forwardRef<SVGSVGElement, BallBasketballOutlineLogoProps>(
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
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
  <path d="M5.65 5.65l12.7 12.7" />
  <path d="M5.65 18.35l12.7 -12.7" />
  <path d="M12 3a9 9 0 0 0 9 9" />
  <path d="M3 12a9 9 0 0 1 9 9" />
    </svg>
  )
);

BallBasketballOutlineLogo.displayName = "BallBasketballOutlineLogo";

export const BallBasketballOutlineLogoMetadata = {
  id: "ball-basketball-outline",
  baseId: "ball-basketball-outline",
  variant: "default",
  name: "Ball Basketball Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BallBasketballOutlineLogo;
