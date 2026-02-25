/**
 * Auto-generated logo component: Square Forbid Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareForbidOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareForbidOutlineLogo = React.forwardRef<SVGSVGElement, SquareForbidOutlineLogoProps>(
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
      <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14" />
  <path d="M9 9l6 6" />
    </svg>
  )
);

SquareForbidOutlineLogo.displayName = "SquareForbidOutlineLogo";

export const SquareForbidOutlineLogoMetadata = {
  id: "square-forbid-outline",
  baseId: "square-forbid-outline",
  variant: "default",
  name: "Square Forbid Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareForbidOutlineLogo;
