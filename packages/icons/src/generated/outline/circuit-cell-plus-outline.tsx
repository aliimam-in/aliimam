/**
 * Auto-generated logo component: Circuit Cell Plus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircuitCellPlusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircuitCellPlusOutlineLogo = React.forwardRef<SVGSVGElement, CircuitCellPlusOutlineLogoProps>(
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
      <path d="M2 12h9" />
  <path d="M15 12h7" />
  <path d="M11 5v14" />
  <path d="M15 9v6" />
  <path d="M3 5h4" />
  <path d="M5 3v4" />
    </svg>
  )
);

CircuitCellPlusOutlineLogo.displayName = "CircuitCellPlusOutlineLogo";

export const CircuitCellPlusOutlineLogoMetadata = {
  id: "circuit-cell-plus-outline",
  baseId: "circuit-cell-plus-outline",
  variant: "default",
  name: "Circuit Cell Plus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircuitCellPlusOutlineLogo;
