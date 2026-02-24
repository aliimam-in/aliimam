/**
 * Auto-generated logo component: Move Diagonal (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MoveDiagonalLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MoveDiagonalLogo = React.forwardRef<SVGSVGElement, MoveDiagonalLogoProps>(
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
      <path d="M11 19H5v-6" />
  <path d="M13 5h6v6" />
  <path d="M19 5 5 19" />
    </svg>
  )
);

MoveDiagonalLogo.displayName = "MoveDiagonalLogo";

export const MoveDiagonalLogoMetadata = {
  id: "move-diagonal",
  baseId: "move-diagonal",
  variant: "default",
  name: "Move Diagonal",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MoveDiagonalLogo;
