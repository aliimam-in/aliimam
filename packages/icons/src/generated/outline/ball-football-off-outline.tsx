/**
 * Auto-generated logo component: Ball Football Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BallFootballOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BallFootballOffOutlineLogo = React.forwardRef<SVGSVGElement, BallFootballOffOutlineLogoProps>(
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
      <path d="M20.041 16.046a9 9 0 0 0 -12.084 -12.09m-2.323 1.683a9 9 0 0 0 12.726 12.73" />
  <path d="M12 7l4.755 3.455l-.566 1.743l-.98 3.014l-.209 .788h-6l-1.755 -5.545l1.86 -1.351l2.313 -1.681l.582 -.423" />
  <path d="M12 7v-4" />
  <path d="M15 16l2.5 3" />
  <path d="M16.755 10.455l3.745 -1.455" />
  <path d="M9.061 16.045l-2.561 2.955" />
  <path d="M7.245 10.455l-3.745 -1.455" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

BallFootballOffOutlineLogo.displayName = "BallFootballOffOutlineLogo";

export const BallFootballOffOutlineLogoMetadata = {
  id: "ball-football-off-outline",
  baseId: "ball-football-off-outline",
  variant: "default",
  name: "Ball Football Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BallFootballOffOutlineLogo;
