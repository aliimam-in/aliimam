/**
 * Auto-generated logo component: Pacman Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PacmanOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PacmanOutlineLogo = React.forwardRef<SVGSVGElement, PacmanOutlineLogoProps>(
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
      <path d="M6.636 5.636a9 9 0 0 1 13.397 .747l-5.619 5.617l5.619 5.617a9 9 0 1 1 -13.397 -11.981" />
  <path d="M11.5 7.5a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
    </svg>
  )
);

PacmanOutlineLogo.displayName = "PacmanOutlineLogo";

export const PacmanOutlineLogoMetadata = {
  id: "pacman-outline",
  baseId: "pacman-outline",
  variant: "default",
  name: "Pacman Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PacmanOutlineLogo;
