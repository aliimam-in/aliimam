/**
 * Auto-generated logo component: Pennant Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PennantOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PennantOffOutlineLogo = React.forwardRef<SVGSVGElement, PennantOffOutlineLogoProps>(
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
      <path d="M8 21h4" />
  <path d="M10 21v-11m0 -4v-3" />
  <path d="M10 4l9 4l-4.858 2.16m-2.764 1.227l-1.378 .613" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

PennantOffOutlineLogo.displayName = "PennantOffOutlineLogo";

export const PennantOffOutlineLogoMetadata = {
  id: "pennant-off-outline",
  baseId: "pennant-off-outline",
  variant: "default",
  name: "Pennant Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PennantOffOutlineLogo;
