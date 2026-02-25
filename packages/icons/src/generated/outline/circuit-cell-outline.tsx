/**
 * Auto-generated logo component: Circuit Cell Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircuitCellOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircuitCellOutlineLogo = React.forwardRef<SVGSVGElement, CircuitCellOutlineLogoProps>(
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
      <path d="M2 12h8" />
  <path d="M14 12h8" />
  <path d="M10 5v14" />
  <path d="M14 9v6" />
    </svg>
  )
);

CircuitCellOutlineLogo.displayName = "CircuitCellOutlineLogo";

export const CircuitCellOutlineLogoMetadata = {
  id: "circuit-cell-outline",
  baseId: "circuit-cell-outline",
  variant: "default",
  name: "Circuit Cell Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircuitCellOutlineLogo;
