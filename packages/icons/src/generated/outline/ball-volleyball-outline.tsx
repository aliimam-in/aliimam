/**
 * Auto-generated logo component: Ball Volleyball Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BallVolleyballOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BallVolleyballOutlineLogo = React.forwardRef<SVGSVGElement, BallVolleyballOutlineLogoProps>(
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
  <path d="M12 12a8 8 0 0 0 8 4" />
  <path d="M7.5 13.5a12 12 0 0 0 8.5 6.5" />
  <path d="M12 12a8 8 0 0 0 -7.464 4.928" />
  <path d="M12.951 7.353a12 12 0 0 0 -9.88 4.111" />
  <path d="M12 12a8 8 0 0 0 -.536 -8.928" />
  <path d="M15.549 15.147a12 12 0 0 0 1.38 -10.611" />
    </svg>
  )
);

BallVolleyballOutlineLogo.displayName = "BallVolleyballOutlineLogo";

export const BallVolleyballOutlineLogoMetadata = {
  id: "ball-volleyball-outline",
  baseId: "ball-volleyball-outline",
  variant: "default",
  name: "Ball Volleyball Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BallVolleyballOutlineLogo;
