/**
 * Auto-generated logo component: Square Toggle Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareToggleOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareToggleOutlineLogo = React.forwardRef<SVGSVGElement, SquareToggleOutlineLogoProps>(
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
      <path d="M12 2l0 20" />
  <path d="M14 20h-8a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8" />
  <path d="M20 6a2 2 0 0 0 -2 -2" />
  <path d="M18 20a2 2 0 0 0 2 -2" />
  <path d="M20 10l0 4" />
    </svg>
  )
);

SquareToggleOutlineLogo.displayName = "SquareToggleOutlineLogo";

export const SquareToggleOutlineLogoMetadata = {
  id: "square-toggle-outline",
  baseId: "square-toggle-outline",
  variant: "default",
  name: "Square Toggle Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareToggleOutlineLogo;
