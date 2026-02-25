/**
 * Auto-generated logo component: Go Game Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GoGameOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GoGameOutlineLogo = React.forwardRef<SVGSVGElement, GoGameOutlineLogoProps>(
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
      <path d="M4 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M10 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M4 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M16 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M3 12h7m4 0h7" />
  <path d="M3 6h1m4 0h13" />
  <path d="M3 18h1m4 0h8m4 0h1" />
  <path d="M6 3v1m0 4v8m0 4v1" />
  <path d="M12 3v7m0 4v7" />
  <path d="M18 3v13m0 4v1" />
    </svg>
  )
);

GoGameOutlineLogo.displayName = "GoGameOutlineLogo";

export const GoGameOutlineLogoMetadata = {
  id: "go-game-outline",
  baseId: "go-game-outline",
  variant: "default",
  name: "Go Game Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GoGameOutlineLogo;
