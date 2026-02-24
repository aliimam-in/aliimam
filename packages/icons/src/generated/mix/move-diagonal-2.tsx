/**
 * Auto-generated logo component: Move Diagonal 2 (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MoveDiagonal2LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MoveDiagonal2Logo = React.forwardRef<SVGSVGElement, MoveDiagonal2LogoProps>(
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
      <path d="M19 13v6h-6" />
  <path d="M5 11V5h6" />
  <path d="m5 5 14 14" />
    </svg>
  )
);

MoveDiagonal2Logo.displayName = "MoveDiagonal2Logo";

export const MoveDiagonal2LogoMetadata = {
  id: "move-diagonal-2",
  baseId: "move-diagonal-2",
  variant: "default",
  name: "Move Diagonal 2",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MoveDiagonal2Logo;
