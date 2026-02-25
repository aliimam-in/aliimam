/**
 * Auto-generated logo component: Square Chevrons Left Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareChevronsLeftOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareChevronsLeftOutlineLogo = React.forwardRef<SVGSVGElement, SquareChevronsLeftOutlineLogoProps>(
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
      <path d="M16 15l-3 -3l3 -3" />
  <path d="M11 15l-3 -3l3 -3" />
  <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14" />
    </svg>
  )
);

SquareChevronsLeftOutlineLogo.displayName = "SquareChevronsLeftOutlineLogo";

export const SquareChevronsLeftOutlineLogoMetadata = {
  id: "square-chevrons-left-outline",
  baseId: "square-chevrons-left-outline",
  variant: "default",
  name: "Square Chevrons Left Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareChevronsLeftOutlineLogo;
