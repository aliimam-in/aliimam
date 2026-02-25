/**
 * Auto-generated logo component: Matrix Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MatrixOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MatrixOutlineLogo = React.forwardRef<SVGSVGElement, MatrixOutlineLogoProps>(
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
      <path d="M8 16h.013" />
  <path d="M12.01 16h.005" />
  <path d="M16.015 16h.005" />
  <path d="M16.015 12h.005" />
  <path d="M8.01 12h.005" />
  <path d="M12.01 12h.005" />
  <path d="M16.02 8h.005" />
  <path d="M8.015 8h.005" />
  <path d="M12.015 8h.005" />
  <path d="M7 4h-1a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h1" />
  <path d="M17 4h1a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-1" />
    </svg>
  )
);

MatrixOutlineLogo.displayName = "MatrixOutlineLogo";

export const MatrixOutlineLogoMetadata = {
  id: "matrix-outline",
  baseId: "matrix-outline",
  variant: "default",
  name: "Matrix Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MatrixOutlineLogo;
