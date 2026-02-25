/**
 * Auto-generated logo component: Ball Tennis Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BallTennisOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BallTennisOutlineLogo = React.forwardRef<SVGSVGElement, BallTennisOutlineLogoProps>(
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
  <path d="M6 5.3a9 9 0 0 1 0 13.4" />
  <path d="M18 5.3a9 9 0 0 0 0 13.4" />
    </svg>
  )
);

BallTennisOutlineLogo.displayName = "BallTennisOutlineLogo";

export const BallTennisOutlineLogoMetadata = {
  id: "ball-tennis-outline",
  baseId: "ball-tennis-outline",
  variant: "default",
  name: "Ball Tennis Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BallTennisOutlineLogo;
