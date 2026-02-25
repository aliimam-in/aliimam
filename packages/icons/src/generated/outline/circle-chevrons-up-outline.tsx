/**
 * Auto-generated logo component: Circle Chevrons Up Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircleChevronsUpOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircleChevronsUpOutlineLogo = React.forwardRef<SVGSVGElement, CircleChevronsUpOutlineLogoProps>(
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
      <path d="M9 15l3 -3l3 3" />
  <path d="M9 11l3 -3l3 3" />
  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    </svg>
  )
);

CircleChevronsUpOutlineLogo.displayName = "CircleChevronsUpOutlineLogo";

export const CircleChevronsUpOutlineLogoMetadata = {
  id: "circle-chevrons-up-outline",
  baseId: "circle-chevrons-up-outline",
  variant: "default",
  name: "Circle Chevrons Up Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircleChevronsUpOutlineLogo;
