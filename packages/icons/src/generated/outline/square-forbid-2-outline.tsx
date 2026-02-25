/**
 * Auto-generated logo component: Square Forbid 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareForbid2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareForbid2OutlineLogo = React.forwardRef<SVGSVGElement, SquareForbid2OutlineLogoProps>(
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
  <path d="M9 15l6 -6" />
    </svg>
  )
);

SquareForbid2OutlineLogo.displayName = "SquareForbid2OutlineLogo";

export const SquareForbid2OutlineLogoMetadata = {
  id: "square-forbid-2-outline",
  baseId: "square-forbid-2-outline",
  variant: "default",
  name: "Square Forbid 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareForbid2OutlineLogo;
