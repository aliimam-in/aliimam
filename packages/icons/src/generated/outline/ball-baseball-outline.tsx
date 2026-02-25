/**
 * Auto-generated logo component: Ball Baseball Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BallBaseballOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BallBaseballOutlineLogo = React.forwardRef<SVGSVGElement, BallBaseballOutlineLogoProps>(
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
      <path d="M5.636 18.364a9 9 0 1 0 12.728 -12.728a9 9 0 0 0 -12.728 12.728" />
  <path d="M12.495 3.02a9 9 0 0 1 -9.475 9.475" />
  <path d="M20.98 11.505a9 9 0 0 0 -9.475 9.475" />
  <path d="M9 9l2 2" />
  <path d="M13 13l2 2" />
  <path d="M11 7l2 1" />
  <path d="M7 11l1 2" />
  <path d="M16 11l1 2" />
  <path d="M11 16l2 1" />
    </svg>
  )
);

BallBaseballOutlineLogo.displayName = "BallBaseballOutlineLogo";

export const BallBaseballOutlineLogoMetadata = {
  id: "ball-baseball-outline",
  baseId: "ball-baseball-outline",
  variant: "default",
  name: "Ball Baseball Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BallBaseballOutlineLogo;
