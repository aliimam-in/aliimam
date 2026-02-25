/**
 * Auto-generated logo component: Circle Chevrons Left Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircleChevronsLeftOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircleChevronsLeftOutlineLogo = React.forwardRef<SVGSVGElement, CircleChevronsLeftOutlineLogoProps>(
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
      <path d="M15 15l-3 -3l3 -3" />
  <path d="M11 15l-3 -3l3 -3" />
  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    </svg>
  )
);

CircleChevronsLeftOutlineLogo.displayName = "CircleChevronsLeftOutlineLogo";

export const CircleChevronsLeftOutlineLogoMetadata = {
  id: "circle-chevrons-left-outline",
  baseId: "circle-chevrons-left-outline",
  variant: "default",
  name: "Circle Chevrons Left Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircleChevronsLeftOutlineLogo;
