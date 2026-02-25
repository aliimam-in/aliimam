/**
 * Auto-generated logo component: Grill Fork Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GrillForkOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GrillForkOutlineLogo = React.forwardRef<SVGSVGElement, GrillForkOutlineLogoProps>(
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
      <path d="M5 5l11.5 11.5" />
  <path d="M19.347 16.575l1.08 1.079a1.96 1.96 0 0 1 -2.773 2.772l-1.08 -1.079a1.96 1.96 0 0 1 2.773 -2.772" />
  <path d="M3 7l3.05 3.15a2.9 2.9 0 0 0 4.1 -4.1l-3.15 -3.05" />
    </svg>
  )
);

GrillForkOutlineLogo.displayName = "GrillForkOutlineLogo";

export const GrillForkOutlineLogoMetadata = {
  id: "grill-fork-outline",
  baseId: "grill-fork-outline",
  variant: "default",
  name: "Grill Fork Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GrillForkOutlineLogo;
