/**
 * Auto-generated logo component: Binary Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BinaryOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BinaryOutlineLogo = React.forwardRef<SVGSVGElement, BinaryOutlineLogoProps>(
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
      <path d="M11 10v-5h-1m8 14v-5h-1" />
  <path d="M15 5.5a.5 .5 0 0 1 .5 -.5h2a.5 .5 0 0 1 .5 .5v4a.5 .5 0 0 1 -.5 .5h-2a.5 .5 0 0 1 -.5 -.5l0 -4" />
  <path d="M10 14.5a.5 .5 0 0 1 .5 -.5h2a.5 .5 0 0 1 .5 .5v4a.5 .5 0 0 1 -.5 .5h-2a.5 .5 0 0 1 -.5 -.5l0 -4" />
  <path d="M6 10h.01m-.01 9h.01" />
    </svg>
  )
);

BinaryOutlineLogo.displayName = "BinaryOutlineLogo";

export const BinaryOutlineLogoMetadata = {
  id: "binary-outline",
  baseId: "binary-outline",
  variant: "default",
  name: "Binary Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BinaryOutlineLogo;
