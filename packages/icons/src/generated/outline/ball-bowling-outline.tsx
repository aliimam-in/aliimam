/**
 * Auto-generated logo component: Ball Bowling Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BallBowlingOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BallBowlingOutlineLogo = React.forwardRef<SVGSVGElement, BallBowlingOutlineLogoProps>(
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
  <path d="M11 9l0 .01" />
  <path d="M15 8l0 .01" />
  <path d="M14 12l0 .01" />
    </svg>
  )
);

BallBowlingOutlineLogo.displayName = "BallBowlingOutlineLogo";

export const BallBowlingOutlineLogoMetadata = {
  id: "ball-bowling-outline",
  baseId: "ball-bowling-outline",
  variant: "default",
  name: "Ball Bowling Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BallBowlingOutlineLogo;
