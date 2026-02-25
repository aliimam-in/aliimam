/**
 * Auto-generated logo component: Perfume Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PerfumeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PerfumeOutlineLogo = React.forwardRef<SVGSVGElement, PerfumeOutlineLogoProps>(
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
      <path d="M10 6v3" />
  <path d="M14 6v3" />
  <path d="M5 11a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2l0 -8" />
  <path d="M10 15a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M9 3h6v3h-6l0 -3" />
    </svg>
  )
);

PerfumeOutlineLogo.displayName = "PerfumeOutlineLogo";

export const PerfumeOutlineLogoMetadata = {
  id: "perfume-outline",
  baseId: "perfume-outline",
  variant: "default",
  name: "Perfume Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PerfumeOutlineLogo;
