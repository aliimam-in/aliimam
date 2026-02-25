/**
 * Auto-generated logo component: Tic Tac Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TicTacOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TicTacOutlineLogo = React.forwardRef<SVGSVGElement, TicTacOutlineLogoProps>(
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
  <path d="M3 12h18" />
  <path d="M12 3v18" />
  <path d="M4 16l4 4" />
  <path d="M4 20l4 -4" />
  <path d="M16 4l4 4" />
  <path d="M16 8l4 -4" />
  <path d="M16 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    </svg>
  )
);

TicTacOutlineLogo.displayName = "TicTacOutlineLogo";

export const TicTacOutlineLogoMetadata = {
  id: "tic-tac-outline",
  baseId: "tic-tac-outline",
  variant: "default",
  name: "Tic Tac Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TicTacOutlineLogo;
