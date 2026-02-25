/**
 * Auto-generated logo component: Squares Selected Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquaresSelectedOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquaresSelectedOutlineLogo = React.forwardRef<SVGSVGElement, SquaresSelectedOutlineLogoProps>(
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
      <path d="M8 10a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2l0 -8" />
  <path d="M8 14.5l6.492 -6.492" />
  <path d="M13.496 20l6.504 -6.504l-6.504 6.504" />
  <path d="M8.586 19.414l10.827 -10.827" />
  <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2" />
    </svg>
  )
);

SquaresSelectedOutlineLogo.displayName = "SquaresSelectedOutlineLogo";

export const SquaresSelectedOutlineLogoMetadata = {
  id: "squares-selected-outline",
  baseId: "squares-selected-outline",
  variant: "default",
  name: "Squares Selected Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquaresSelectedOutlineLogo;
